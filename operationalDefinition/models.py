from django.db import models
from django.urls import reverse


class Category(models.Model):
    title = models.CharField(max_length=30, primary_key=True)

    def __str__(self):
        return self.title


class ICDCode(models.Model):
    name = models.CharField(max_length=10, primary_key=True)
    title = models.CharField(max_length=50)

    class Meta:
        ordering = ("name",)

    def __str__(self):
        return self.name + ": " + self.title


class EDICode(models.Model):
    name = models.CharField(max_length=10, primary_key=True)
    title = models.CharField(max_length=50)

    class Meta:
        ordering = ("name",)

    def __str__(self):
        return self.name + ": " + self.title


class ATCCode(models.Model):
    name = models.CharField(max_length=10, primary_key=True)
    title = models.CharField(max_length=50)

    class Meta:
        ordering = ("name",)

    def __str__(self):
        return self.name + ": " + self.title


class OperationalDefinition(models.Model):
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)

    primary_icd_code = models.ManyToManyField(ICDCode, related_name="primary_icd_code")
    icd_code = models.ManyToManyField(ICDCode, related_name='icd_code', blank=True)
    icd_subtract_days = models.IntegerField(blank=True, null=True)
    icd_add_days = models.IntegerField(blank=True, null=True)

    edi_code = models.ManyToManyField(EDICode, related_name='edi_code', blank=True)
    atc_code = models.ManyToManyField(ATCCode, related_name='atc_code', blank=True)
    edi_subtract_days = models.IntegerField(blank=True, null=True)
    edi_add_days = models.IntegerField(blank=True, null=True)

    description = models.CharField(max_length=300, blank=True, null=True)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    # def __str__(self):
    #     return "ICD Code: " + self.primary_icd_code

    def get_absolute_url(self):
        return reverse('detail', args=[str(self.id)])

    class Meta:
        ordering = ['-updated']


