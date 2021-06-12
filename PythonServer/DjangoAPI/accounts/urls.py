from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
from .views import *
from django.urls import path

urlpatterns = [
    # path('register' , RegisterView.as_view()),
    path('register/', registration, name='register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('login/', CustomTokenObtainPairView.as_view(), name='custom_token_obtain_pair'),
]

