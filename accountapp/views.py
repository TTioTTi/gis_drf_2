from django.contrib.auth.models import User
from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from rest_framework import authentication, permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView, RetrieveAPIView, UpdateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from accountapp.models import NewModel
from accountapp.serializers import NewModelSerializer, UserSerializer, UserWithoutPasswordSerializer


# UI 설정 부분
def hello_world_template(request):
    return render(request, 'accountapp/hello_world.html')


# 로직 처리 부분
# API Guide - Views - Function Based Views
@api_view(['GET', 'POST'])
def hello_world(request):

    if request.method == 'POST':
        input_data = request.data.get('input_data')

        new_model = NewModel()
        new_model.text = input_data
        new_model.save()

        # Serializing objects
        serializer = NewModelSerializer(new_model)
        return Response(serializer.data)

    new_model_list = NewModel.objects.all()
    # 단일 객체가 아니기 때문에 many 설정
    serializer = NewModelSerializer(new_model_list, many=True)
    return Response(serializer.data)


def AccountCreateTemplate(request):
    return render(request, 'accountapp/create.html')


# DRF - API Guide - Generic views (queryset=model/serializer_class=form_class/permission_classes=권한 설정)
# DRF - API Guide - CreateAPIView (postman - Body - form_data)
class AccountCreateAPIView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []


'''
# https://www.django-rest-framework.org/api-guide/views/#class-based-views
# Class-based Views - For example
# postman - Headers - (Authorization/Token f1042e133de797dd2f49e89487f7453029f7b49c)
class ListUsers(APIView):
    """
    View to list all users in the system.

    * Requires token authentication.
    * Only admin users are able to access this view.
    """
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        usernames = [user.username for user in User.objects.all()]
        return Response(usernames)
'''


def AccountLoginView(request):
    return render(request, 'accountapp/login.html')


class AccountRetrieveTemplateView(TemplateView):
    template_name = 'accountapp/retrieve.html'


# DRF - API Guide - Generic views - RetrieveAPIView
# postman - Headers - http://127.0.0.1:8000/accounts/retrieve/4
class AccountRetrieveAPIView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserWithoutPasswordSerializer
    permission_classes = [permissions.AllowAny]
    authentication_classes = [TokenAuthentication]


class AccountUpdateTemplateView(TemplateView):
    template_name = 'accountapp/update.html'


class AccountUpdateAPIView(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserWithoutPasswordSerializer
    permission_classes = []
    authentication_classes = [TokenAuthentication]
