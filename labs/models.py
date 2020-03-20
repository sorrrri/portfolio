from django.db import models

site_name = models.CharField(max_length=100)
url = models.URLField('Site URL')