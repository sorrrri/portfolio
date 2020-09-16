from django.shortcuts import render
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView

# Create your views here.
from news.models import News


class NewsList(ListView):
    model = News
    paginate_by = 2


class NewsDetail(DetailView):
    model = News


