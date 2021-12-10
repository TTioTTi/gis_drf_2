from django.db import models

# Create your models here.


class NewModel(models.Model):
    text = models.TextField(max_length=255, null=False)
    created_at = models.DateField(auto_now_add=True)
