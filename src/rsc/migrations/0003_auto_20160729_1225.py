# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-07-29 12:25
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rsc', '0002_structure_label'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='rsc',
            unique_together=set([('structure', 'year')]),
        ),
    ]
