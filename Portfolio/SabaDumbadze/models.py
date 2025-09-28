from django.db import models

# Create your models here.
class Email(models.Model):
    email = models.EmailField(default='')
    name = models.TextField(default='')
    message = models.TextField(default='')

    def __str__(self):
        return f"Email {self.pk}"