from django.conf import settings
from django.db import models
from django.urls import reverse


class Category(models.Model):
    title = models.CharField(max_length=30, primary_key=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title']
        verbose_name = 'category'
        verbose_name_plural = 'categories'


class ICDCode(models.Model):
    name = models.CharField(max_length=10, primary_key=True)
    title = models.CharField(max_length=200)
    title_en = models.CharField(max_length=200)

    class Meta:
        ordering = ("name",)

    def __str__(self):
        return self.name + ": " + self.title


class EDICode(models.Model):
    name = models.CharField(max_length=200, null=True)
    atc_code = models.CharField(max_length=200)
    title = models.CharField(max_length=200)

    class Meta:
        ordering = ("name",)

    def __str__(self):
        return self.name + ": " + self.title


class VaccineCode(models.Model):
    name = models.CharField(max_length=10, primary_key=True)
    title = models.CharField(max_length=200)
    title_en = models.CharField(max_length=200)

    class Meta:
        ordering = ("name",)

    def __str__(self):
        return self.name + ": " + self.title


class OperationalDefinition(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)

    primary_icd_code = models.ManyToManyField(ICDCode, related_name="primary_icd_code", blank=True)
    primary_edi_code = models.ManyToManyField(EDICode, related_name="primary_edi_code", blank=True)
    primary_vaccine_code = models.ManyToManyField(VaccineCode, related_name="primary_vaccine_code", blank=True)

    icd_code_01 = models.ForeignKey(ICDCode, on_delete=models.CASCADE, related_name="icd_code_01", blank=True, null=True)
    icd_code_02 = models.ForeignKey(ICDCode, on_delete=models.CASCADE, related_name="icd_code_02", blank=True, null=True)
    icd_code_03 = models.ForeignKey(ICDCode, on_delete=models.CASCADE, related_name="icd_code_03", blank=True, null=True)
    icd_code_04 = models.ForeignKey(ICDCode, on_delete=models.CASCADE, related_name="icd_code_04", blank=True, null=True)
    icd_code_05 = models.ForeignKey(ICDCode, on_delete=models.CASCADE, related_name="icd_code_05", blank=True, null=True)
    icd_code_06 = models.ForeignKey(ICDCode, on_delete=models.CASCADE, related_name="icd_code_06", blank=True, null=True)
    icd_code_07 = models.ForeignKey(ICDCode, on_delete=models.CASCADE, related_name="icd_code_07", blank=True, null=True)
    icd_code_08 = models.ForeignKey(ICDCode, on_delete=models.CASCADE, related_name="icd_code_08", blank=True, null=True)
    icd_code_09 = models.ForeignKey(ICDCode, on_delete=models.CASCADE, related_name="icd_code_09", blank=True, null=True)
    icd_code_10 = models.ForeignKey(ICDCode, on_delete=models.CASCADE, related_name="icd_code_10", blank=True, null=True)

    edi_code_01 = models.ForeignKey(EDICode, on_delete=models.CASCADE, related_name="edi_code_01", blank=True, null=True)
    edi_code_02 = models.ForeignKey(EDICode, on_delete=models.CASCADE, related_name="edi_code_02", blank=True, null=True)
    edi_code_03 = models.ForeignKey(EDICode, on_delete=models.CASCADE, related_name="edi_code_03", blank=True, null=True)
    edi_code_04 = models.ForeignKey(EDICode, on_delete=models.CASCADE, related_name="edi_code_04", blank=True, null=True)
    edi_code_05 = models.ForeignKey(EDICode, on_delete=models.CASCADE, related_name="edi_code_05", blank=True, null=True)
    edi_code_06 = models.ForeignKey(EDICode, on_delete=models.CASCADE, related_name="edi_code_06", blank=True, null=True)
    edi_code_07 = models.ForeignKey(EDICode, on_delete=models.CASCADE, related_name="edi_code_07", blank=True, null=True)
    edi_code_08 = models.ForeignKey(EDICode, on_delete=models.CASCADE, related_name="edi_code_08", blank=True, null=True)
    edi_code_09 = models.ForeignKey(EDICode, on_delete=models.CASCADE, related_name="edi_code_09", blank=True, null=True)
    edi_code_10 = models.ForeignKey(EDICode, on_delete=models.CASCADE, related_name="edi_code_10", blank=True, null=True)

    vaccine_code_01 = models.ForeignKey(VaccineCode, on_delete=models.CASCADE, related_name="vaccine_code_01", blank=True, null=True)
    vaccine_code_02 = models.ForeignKey(VaccineCode, on_delete=models.CASCADE, related_name="vaccine_code_02", blank=True, null=True)
    vaccine_code_03 = models.ForeignKey(VaccineCode, on_delete=models.CASCADE, related_name="vaccine_code_03", blank=True, null=True)
    vaccine_code_04 = models.ForeignKey(VaccineCode, on_delete=models.CASCADE, related_name="vaccine_code_04", blank=True, null=True)
    vaccine_code_05 = models.ForeignKey(VaccineCode, on_delete=models.CASCADE, related_name="vaccine_code_05", blank=True, null=True)
    vaccine_code_06 = models.ForeignKey(VaccineCode, on_delete=models.CASCADE, related_name="vaccine_code_06", blank=True, null=True)
    vaccine_code_07 = models.ForeignKey(VaccineCode, on_delete=models.CASCADE, related_name="vaccine_code_07", blank=True, null=True)
    vaccine_code_08 = models.ForeignKey(VaccineCode, on_delete=models.CASCADE, related_name="vaccine_code_08", blank=True, null=True)
    vaccine_code_09 = models.ForeignKey(VaccineCode, on_delete=models.CASCADE, related_name="vaccine_code_09", blank=True, null=True)
    vaccine_code_10 = models.ForeignKey(VaccineCode, on_delete=models.CASCADE, related_name="vaccine_code_10", blank=True, null=True)

    description = models.TextField(max_length=300, blank=True, null=True)
    query = models.TextField(max_length=300, blank=True, null=True)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    # def __str__(self):
    #     return "ICD Code: " + self.primary_icd_code

    def get_absolute_url(self):
        return reverse('detail', args=[str(self.id)])

    class Meta:
        ordering = ['-updated']


