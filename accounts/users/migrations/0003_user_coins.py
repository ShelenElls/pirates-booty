# Generated by Django 4.0.3 on 2022-07-26 21:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0002_completed_workout"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="coins",
            field=models.IntegerField(default=0),
        ),
    ]
