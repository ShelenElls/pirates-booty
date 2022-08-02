# Generated by Django 4.0.3 on 2022-08-02 01:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_remove_completed_workout_user_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='completed_workout',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='users', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]