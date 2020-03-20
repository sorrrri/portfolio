from django.db import models

class Labs(models.Model):
    site_name = models.CharField(max_length=100)
    url = models.URLField('Site URL')