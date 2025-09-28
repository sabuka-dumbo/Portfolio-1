from django.urls import path
from . import views
from django.views.i18n import set_language

urlpatterns = [
    # Redirect or index depending on language choice
    path('', views.index_redirect, name="index_redirect"),

    # Actual pages
    path("index/", views.index, name="index"),
    path("about/", views.about, name="about"),
    path("works/", views.works, name="works"),
    path("contact/", views.contact, name="contact"),

    # Language selection page
    path('choose-language/', views.choose_language, name='choose_language'),

    # Django built-in set_language view (optional if using POST to change language)
    path('i18n/setlang/', set_language, name='set_language'),

    # APIs
    path('api/email/', views.emailapi, name="emailapi"),
]
