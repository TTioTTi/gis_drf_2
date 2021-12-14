from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.permissions import BasePermission


'''
permissions - IsAdminUser 
customizing

class IsOwner(BasePermission):
    def has_permission(self, request, view):
        user = User.objects.get(pk=view.kwargs['pk'])
        return bool(request.user == user)
        
        
https://www.django-rest-framework.org/api-guide/permissions/#examples
API Guide - Permissions - Custom permissions - Examples
https://www.django-rest-framework.org/api-guide/permissions/#custom-permissions
'''


class IsOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        else:
            return obj == request.user
