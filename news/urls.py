from django.urls import path
from .views import *


urlpatterns = [
    path('', NewsList.as_view(), name='news_list'),
    path('detail/<int:pk>', NewsDetail.as_view(), name='news_detail'),
]