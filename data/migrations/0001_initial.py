# Generated by Django 3.0.4 on 2020-03-26 02:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('type', models.CharField(max_length=30)),
                ('url', models.URLField(verbose_name='URL')),
                ('tag', models.CharField(max_length=60)),
                ('photo', models.ImageField(default='images/no_image.png', upload_to='images/%Y%m%d')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['-updated'],
            },
        ),
    ]
