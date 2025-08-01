from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path("about/", views.about, name="about"),
    path("works/", views.works, name="works"),
    path("contact/", views.contact, name="contact"),
]