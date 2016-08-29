# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-08-24 12:53
from __future__ import unicode_literals

from django.db import migrations

structures = ["Administration centrale", "DREAL Alsace Champagne-Ardenne Lorraine", "DREAL Aquitaine Limousin Poitou-Charente", "DREAL Auvergne Rhône-Alpes", "DREAL Bourgogne Franche-Comté", "DREAL Bretagne", "DREAL Centre-Val de Loire", "DREAL Corse ", "DREAL Languedoc-Roussillon Midi-Pyrénées", "DREAL Nord-Pas de Calais et Picardie", "DREAL Normandie", "DREAL Pays de la Loire", "DREAL Provence-Alpes-Côte d’Azur", "DIRM Manche Est-Mer du Nord", "DIRM de la Mer Nord Atlantique-Manche Ouest", "DIRM Sud Atlantique", "DIRM Méditerranée", "CROSS Gris-Nez", "CROSS Jobourg", "CROSS Corsen", "CROSS Atlantique", "CROSS Méditerranée", "CROSS MED en Corse", "CROSS Antilles-Guyane", "CROSS RU", "DSAC Nord", "DSAC Nord-Est	", "DSAC Centre-Est", "DSAC Sud-Est", "DSAC Sud", "DSAC Sud-Ouest", "DSAC Ouest", "DSAC Antilles Guyane", "DSAC Océan Indien", "DRIEA IF", "DRIHL IF", "DRIEE IF", "DDT Ain", "DDT Aisne", "DDT Allier", "DDT Alpes-de-Haute-Provence", "DDT Hautes-Alpes", "DDT Alpes-Maritimes", "DDT Ardèche", "DDT Ardennes", "DDT Ariège", "DDT Aube", "DDT Aude", "DDT Aveyron", "DDT Bouches-du-Rhône", "DDT Calvados", "DDT Cantal", "DDT Charente", "DDT Charente-Maritime", "DDT Cher", "DDT Corrèze", "DDT Corse-du-Sud", "DDT Haute-Corse", "DDT Côte-d'Or", "DDT Côtes-d'Armor", "DDT Creuse", "DDT Dordogne", "DDT Doubs", "DDT Drôme", "DDT Eure", "DDT Eure-et-Loir", "DDT Finistère", "DDT Gard", "DDT Haute-Garonne", "DDT Gers", "DDT Gironde", "DDT Hérault", "DDT Ille-et-Vilaine", "DDT Indre", "DDT Indre-et-Loire", "DDT Isère", "DDT Jura", "DDT Landes", "DDT Loir-et-Cher", "DDT Loire", "DDT Haute-Loire", "DDT Loire-Atlantique", "DDT Loiret", "DDT Lot", "DDT Lot-et-Garonne", "DDT Lozère", "DDT Maine-et-Loire", "DDT Manche", "DDT Marne", "DDT Haute-Marne", "DDT Mayenne", "DDT Meurthe-et-Moselle", "DDT Meuse", "DDT Morbihan", "DDT Moselle", "DDT Nièvre", "DDT Nord", "DDT Oise", "DDT Orne", "DDT Pas-de-Calais", "DDT Puy-de-Dôme", "DDT Pyrénées-Atlantiques", "DDT Hautes-Pyrénées", "DDT Pyrénées-Orientales", "DDT Bas-Rhin", "DDT Haut-Rhin", "DDT Rhône", "DDT Métropole de Lyon", "DDT Haute-Saône", "DDT Saône-et-Loire", "DDT Sarthe", "DDT Savoie", "DDT Haute-Savoie", "DDT Paris", "DDT Seine-Maritime", "DDT Seine-et-Marne", "DDT Yvelines", "DDT Deux-Sèvres", "DDT Somme", "DDT Tarn", "DDT Tarn-et-Garonne", "DDT Var", "DDT Vaucluse", "DDT Vendée", "DDT Vienne", "DDT Haute-Vienne", "DDT Vosges", "DDT Yonne", "DDT Territoire de Belfort", "DDT Essonne", "DDT Hauts-de-Seine", "DDT Seine-Saint-Denis", "DDT Val-de-Marne", "DDT Val-d'Oise", "DDT Guadeloupe", "DDT Martinique", "DDT Guyane", "DDT La Réunion", "DDT Saint-Pierre-et-Miquelon", "DDT Mayotte", "DDT Saint-Barthélemy", "DDT Saint-Martin", "DDT Terres australes et antarctiques françaises", "DDT Wallis-et-Futuna", "DDT Polynésie française", "DDT Nouvelle-Calédonie", "DDT île de Clipperton", "DIR Nord-Ouest", "DIR Sud-Ouest", "DIR Atlantique", "DIR Centre-Ouest", "DIR Ouest", "DIR Ile-de-France", "DIR Méditerranée", "DIR Massif-Central", "DIR Centre-Est", "DIR Nord", "DIR Est", "CNRA Nord", "CNRA de l’Est", "CNRA Sud-Est", "CNRA Sud-Ouest", "SAC Nouvelle-Calédonie", "SAC Réunion, Mayotte et iles éparses", "CSN Dunkerque", "CSN Boulogne-sur-Mer", "CSN Rouen", "CSN Havre", "CSN Caen", "CSN Saint-Malo", "CSN Brest", "CSN Concarneau", "CSN Lorient", "CSN Saint-Nazaire", "CSN La Rochelle", "CSN Bordeaux", "CSN Marseille", "CSN Sète", "CSN Fort-de-France", "CSN La Réunion", "DEAL Guadeloupe", "DEAL la Réunion", "DEAL Martinique", "DEAL la Guyane", "DEAL de Mayotte", "DM Guyane ", "DM Sud océan Indien ", "DM Guadeloupe", "DM Martinique", "DTAM Saint-Pierre et Miquelon"]

def import_structures(apps, schema_editor):
    # We can't import the Person model directly as it may be a newer
    # version than this migration expects. We use the historical version.
    Structure = apps.get_model("rsc", "Structure")
    for structure in structures:
        s = Structure.objects.create(label=structure)


class Migration(migrations.Migration):

    dependencies = [
        ('rsc', '0003_auto_20160729_1225'),
    ]

    operations = [
    	migrations.RunPython(import_structures),
    ]