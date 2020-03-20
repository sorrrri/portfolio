from django.shortcuts import render
from django.views.generic.list import ListView

from .models import Labs

class ListView(ListView):
    model = Labs