import floppyforms.__future__ as forms
#from django.forms import ModelForm
from .models import RSC, JuryComposition, TypeOfRecruitment


class RSCForm(forms.ModelForm):
    class Meta:
        model = RSC
        fields = '__all__'


class TypeOfRecruitmentForm(forms.ModelForm):
    class Meta:
        model = TypeOfRecruitment
        fields = '__all__'


class JuryCompositionForm(forms.ModelForm):
    class Meta:
        model = JuryComposition
        fields = '__all__'
