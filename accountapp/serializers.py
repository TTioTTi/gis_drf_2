# django rest framework - API Guide - Declaring Serializers
from django.contrib.auth.models import User
from rest_framework import serializers

from profileapp.serializers import ProfileSerializer


class NewModelSerializer(serializers.Serializer):
    text = serializers.CharField(max_length=255)
    created_at = serializers.DateField()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']

    # postman Login (Body) - "token": "f1042e133de797dd2f49e89487f7453029f7b49c"
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserWithoutPasswordSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'date_joined', 'profile']
