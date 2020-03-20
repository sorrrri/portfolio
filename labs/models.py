from django.db import models

class Labs(models.Model):
    site_name = models.CharField(max_length=100)
    url = models.URLField('Site URL')

    def __str__(self):
        # 객체를 출력할 때 나타날 값
        return "이름: " + self.site_name + ", 주소: " + self.url