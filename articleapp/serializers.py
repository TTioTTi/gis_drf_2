from rest_framework.serializers import ModelSerializer

from articleapp.models import Article


class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'image', 'content', 'thumb', 'created_at']
        read_only_fields = ['id', 'thumb', 'created_at']


'''
https://www.django-rest-framework.org/api-guide/serializers/#specifying-read-only-fields
사용자가 임의로 썸네일 생성/수정 하지 못하게 하고 읽기만 가능케 하기
'''
