from rest_framework.serializers import ModelSerializer

from accountapp.serializers import UserWithoutPasswordSerializer
from profileapp.models import Profile


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'nickname', 'image', 'message', 'owner_id']
