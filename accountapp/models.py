from django.contrib.auth.models import User
from django.db import models

# Create your models here.
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class NewModel(models.Model):
    text = models.TextField(max_length=255, null=False)
    created_at = models.DateField(auto_now_add=True)


# https://www.django-rest-framework.org/api-guide/authentication/#by-using-signals
# Generating Tokens
@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
