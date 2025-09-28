from django.urls import path
from . import views
from django.views.i18n import set_language

urlpatterns = [
    path('', views.index, name="index"),
    path("about/", views.about, name="about"),
    path("works/", views.works, name="works"),
    path("contact/", views.contact, name="contact"),
    path('choose-language/', views.choose_language, name='choose_language'),
    path('i18n/setlang/', set_language, name='set_language'),

    ## APIs
    path('api/email/', views.emailapi, name="emailapi")
]