from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import generic
from django.views.generic import DetailView, UpdateView, DeleteView, ListView

from . import forms
from .models import OperationalDefinition


class OperationalDefinitionListView(ListView):
    model = OperationalDefinition
    ordering = "-updated"


class OperationalDefinitionICDCodeListView(ListView):
    model = OperationalDefinition
    template_name = "operationalDefinition/icd_code_list.html"
    ordering = "icd_code"
    success_url = reverse_lazy('create')


class OperationalDefinitionCreateView(generic.CreateView):
    model = OperationalDefinition
    success_url = reverse_lazy('list')
    template_name_suffix = '_create'
    form_class = forms.OperationalDefinitionForm


class OperationalDefinitionDetailView(DetailView):
    model = OperationalDefinition


class OperationalDefinitionUpdateView(UpdateView):
    model = OperationalDefinition
    fields = ['category', 'primary_icd_code', 'icd_code', 'icd_name', 'icd_subtract_days', 'icd_add_days',
              'edi_code', 'atc_code', 'edi_subtract_days', 'edi_add_days', 'description']
    template_name_suffix = '_update'
    success_url = reverse_lazy('list')


class OperationalDefinitionDeleteView(DeleteView):
    model = OperationalDefinition
    success_url = reverse_lazy('list')
