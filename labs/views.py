from django.shortcuts import render
from django.views.generic.list import ListView

from .models import Labs

class LabsListView(ListView):
    model = Labs