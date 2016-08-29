from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView

from rsc import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.home, name='home'),
    url(r'^rsc/create/$', views.RSCCreateView.as_view(), name='create'),
    url(r'^rsc/(?P<pk>\d+)/$', views.RSCUpdateView.as_view(), name='edit'),
    url(r'^accounts/', include('registration.backends.default.urls')),
    url(r'^accounts/profile/', views.profile, name='profile'),
    url(r'^(?P<id>\d+)/$', views.detail, name='detail')
]
