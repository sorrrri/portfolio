from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User

class Data(models.Model):
    TYPE_CHOICES = (
        ('dashboard', '대시보드'),
        ('viewer', '뷰어'),
        ('dashboard2', '대시보드2'),
    )
    name = models.CharField(max_length=30)
    type = models.CharField(max_length=30, choices=TYPE_CHOICES, default='dashboard')
    url = models.URLField('URL')
    tag = models.CharField(max_length=60)

    # 이미지 업로드 기능 추가
    # author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_photos')
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