# Generated by Django 3.2.2 on 2021-06-13 17:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='items_json',
            new_name='itemsJson',
        ),
    ]