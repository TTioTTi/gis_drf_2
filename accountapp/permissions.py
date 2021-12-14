from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.permissions import BasePermission


class IsOwner(BasePermission):
    def has_permission(self, request, view):
        user = User.objects.get(pk=view.kwargs['pk'])
        return bool(request.user == user)


'''
permissions - IsAdminUser 
customizing


https://www.django-rest-framework.org/api-guide/permissions/#examples
API Guide - Permissions - Custom permissions - Examples

def has_object_permission(self, request, view, obj):
    return obj == request.user
'''
