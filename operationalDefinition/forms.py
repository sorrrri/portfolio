from django import forms
from django_select2 import forms as s2forms

from .models import OperationalDefinition


class PrimaryCodeWidget(s2forms.ModelSelect2MultipleWidget):
    model = OperationalDefinition
    search_fields = [
        "name__icontains",
        "title__icontains"
    ]


class CodeWidget(s2forms.ModelSelect2Widget):
    model = OperationalDefinition
    search_fields = [
        "name__icontains",
        "title__icontains"
    ]


class OperationalDefinitionForm(forms.ModelForm):
    class Meta:
        model = OperationalDefinition
        fields = ['category', 'query', 'description',
                  'primary_icd_code', 'icd_code_01', 'icd_code_02', 'icd_code_03', 'icd_code_04', 'icd_code_05',
                  'icd_code_06', 'icd_code_07', 'icd_code_08', 'icd_code_09', 'icd_code_10',
                  'primary_edi_code', 'edi_code_01', 'edi_code_02', 'edi_code_03', 'edi_code_04', 'edi_code_05',
                  'edi_code_06', 'edi_code_07', 'edi_code_08', 'edi_code_09', 'edi_code_10',
                  'primary_vaccine_code', 'vaccine_code_01', 'vaccine_code_02', 'vaccine_code_03', 'vaccine_code_04',
                  'vaccine_code_05', 'vaccine_code_06', 'vaccine_code_07', 'vaccine_code_08', 'vaccine_code_09',
                  'vaccine_code_10']

        widgets = {
            "primary_icd_code": PrimaryCodeWidget,
            "primary_edi_code": PrimaryCodeWidget,
            "primary_vaccine_code": PrimaryCodeWidget,

            "icd_code_01": CodeWidget,
            "icd_code_02": CodeWidget,
            "icd_code_03": CodeWidget,
            "icd_code_04": CodeWidget,
            "icd_code_05": CodeWidget,
            "icd_code_06": CodeWidget,
            "icd_code_07": CodeWidget,
            "icd_code_08": CodeWidget,
            "icd_code_09": CodeWidget,
            "icd_code_10": CodeWidget,

            "edi_code_01": CodeWidget,
            "edi_code_02": CodeWidget,
            "edi_code_03": CodeWidget,
            "edi_code_04": CodeWidget,
            "edi_code_05": CodeWidget,
            "edi_code_06": CodeWidget,
            "edi_code_07": CodeWidget,
            "edi_code_08": CodeWidget,
            "edi_code_09": CodeWidget,
            "edi_code_10": CodeWidget,

            "vaccine_code_01": CodeWidget,
            "vaccine_code_02": CodeWidget,
            "vaccine_code_03": CodeWidget,
            "vaccine_code_04": CodeWidget,
            "vaccine_code_05": CodeWidget,
            "vaccine_code_06": CodeWidget,
            "vaccine_code_07": CodeWidget,
            "vaccine_code_08": CodeWidget,
            "vaccine_code_09": CodeWidget,
            "vaccine_code_10": CodeWidget,
        }
