from django.db import models
from django.urls import reverse



class CategoryChoice(models.Model):
    category_text = models.CharField(max_length=30, primary_key=True)

    def __str__(self):
        return f'{self.category_text}'

class Data(models.Model):

    name = models.CharField(max_length=30)
    category = models.ForeignKey(CategoryChoice, on_delete=models.SET_NULL, null=True)
    url = models.URLField('URL')
    description = models.CharField(max_length=60)

    # 이미지 업로드 기능 추가
    photo = models.ImageField(upload_to='images/%Y%m%d', default='images/no_image.png')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        # 관리자 목록화면에 출력
        return "이름 : " +self.name + ", URL: " + self.url

    def get_absolute_url(self):
        # 상세페이지에 URL 패턴의 이름과 추가 인자를 전달받기
        return reverse('detail', args=[str(self.id)])

    class Meta:
        ordering = ['-updated']