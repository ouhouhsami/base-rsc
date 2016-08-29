from django.shortcuts import render
from django.forms import modelformset_factory

from extra_views import InlineFormSet, CreateWithInlinesView, UpdateWithInlinesView

from .forms import RSCForm, TypeOfRecruitmentForm, JuryCompositionForm
from .models import TypeOfRecruitment, JuryComposition, RSC, Structure


def home(request):
    # returns list of surveys
    surveys = RSC.objects.all().order_by('-year')
    return render(request, 'home.html', {
        'surveys': surveys,
    })


def profile(request):
    user = request.user
    structures = Structure.objects.filter(users=user)
    surveys = RSC.objects.filter(structure__in=structures).order_by('-year')
    return render(request, 'profile.html', {
        'user': user,
        'structures': structures,
        'surveys': surveys
    })


def detail(request, id):
    survey = RSC.objects.get(id=id)
    return render(request, 'detail.html', {
        'survey': survey
    })


class TypeOfRecruitmentInline(InlineFormSet):
    model = TypeOfRecruitment
    form_class = TypeOfRecruitmentForm
    extra = 1


class JuryCompositionInline(InlineFormSet):
    model = JuryComposition
    form_class = JuryCompositionForm


class RSCCreateView(CreateWithInlinesView):
    model = RSC
    form_class = RSCForm
    inlines = [TypeOfRecruitmentInline, JuryCompositionInline]
    template_name = 'edit.html'

    def get_form(self, form_class):
        form = super(RSCCreateView, self).get_form(form_class)
        form.fields["structure"].queryset = Structure.objects.filter(users=self.request.user)
        return form

    def get_initial(self):
        initial = self.initial.copy()
        initial['structure'] = self.request.GET.get('structure', None)
        return initial

    def get_success_url(self):
        return self.object.get_absolute_url()


class RSCUpdateView(UpdateWithInlinesView):
    model = RSC
    form_class = RSCForm
    inlines = [TypeOfRecruitmentInline, JuryCompositionInline]
    template_name = 'edit.html'

    def get_form(self, form_class):
        form = super(RSCUpdateView, self).get_form(form_class)
        form.fields["structure"].queryset = Structure.objects.filter(users=self.request.user)
        return form

    def get_success_url(self):
        return self.object.get_absolute_url()
