from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from accountapp.models import NewModel
from accountapp.serializers import NewModelSerializer


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
