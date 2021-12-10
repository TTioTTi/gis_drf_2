# django rest framework - API Guide - Declaring Serializers
from django.contrib.auth.models import User
from rest_framework import serializers


class NewModelSerializer(serializers.Serializer):
    text = serializers.CharField(max_length=255)
    created_at = serializers.DateField()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']
