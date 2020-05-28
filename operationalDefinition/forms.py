from django import forms
from django_select2 import forms as s2forms

from .models import OperationalDefinition


class ICDCodeWidget(s2forms.ModelSelect2MultipleWidget):
    model = OperationalDefinition
    search_fields = [
        "name__icontains",
        "title__icontains"
    ]


class EDICodeWidget(s2forms.ModelSelect2MultipleWidget):
    model = OperationalDefinition
    search_fields = [
        "name__icontains",
        "title__icontains"
    ]


class ATCCodeWidget(s2forms.ModelSelect2MultipleWidget):
    model = OperationalDefinition
    search_fields = [
        "name__icontains",
        "title__icontains"
    ]


class OperationalDefinitionForm(forms.ModelForm):
    class Meta:
        model = OperationalDefinition
        fields = ['category', 'primary_icd_code', 'icd_code', 'icd_subtract_days', 'icd_add_days', 'edi_code',
                  'atc_code', 'edi_subtract_days', 'edi_add_days', 'description']
        widgets = {
            "primary_icd_code": ICDCodeWidget,
            "icd_code": ICDCodeWidget,
            "edi_code": EDICodeWidget,
            "atc_code": ATCCodeWidget,
        }
