import json

from django.http import HttpResponse
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.views import generic
from django.views.generic import DetailView, UpdateView, DeleteView, ListView

from . import forms
from .models import OperationalDefinition, ICDCode


class OperationalDefinitionListView(ListView):
    model = OperationalDefinition
    ordering = "-updated"


class OperationalDefinitionCreateView(generic.CreateView):
    model = OperationalDefinition
    success_url = reverse_lazy('list')
    template_name_suffix = '_create'
    form_class = forms.CategoryOperationalDefinitionForm

    def form_valid(self, form):
        form.instance.user_id = self.request.user.id
        if form.is_valid():
            form.save()
            return redirect('/')
        else:
            return self.render_to_response({'form': form})


class OperationalDefinitionDetailView(DetailView):
    model = OperationalDefinition


class OperationalDefinitionUpdateView(UpdateView):
    model = OperationalDefinition
    success_url = reverse_lazy('list')
    template_name_suffix = '_update'
    form_class = forms.OperationalDefinitionForm


class OperationalDefinitionDeleteView(DeleteView):
    model = OperationalDefinition
    success_url = reverse_lazy('list')


def get_select_icd_code(request):
    queryset = ICDCode.objects.all()
    query = request.GET.get('q')
    queryset = queryset.filter(name__icontains=query)
    results = [
        {
            'id': icdcode.name,
            'text': icdcode.title,
        } for icdcode in queryset
    ]

    content = {
        "results": results,
        "pagination": {
            "more": False
        }
    }

    return HttpResponse(json.dumps(content, ensure_ascii=True), content_type='application/json')
