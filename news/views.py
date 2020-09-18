from django.shortcuts import render
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView

# Create your views here.
from news.models import News


class NewsListMain(ListView):
    template_name = 'news/main.html'
    model = News
    paginate_by = 3


class NewsListView(ListView):
    template_name = 'news/news_list.html'
    model = News
    paginate_by = 10


class NewsDetailView(DetailView):
    model = News
