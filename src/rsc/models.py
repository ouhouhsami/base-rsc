# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from datetime import date


class Structure(models.Model):
    users = models.ManyToManyField(User)
    label = models.CharField(max_length=255)

    def __unicode__(self):
        return self.label


class RSC(models.Model):
    structure = models.ForeignKey(Structure)
    year = models.IntegerField(default=date.today().year)
    # Effectifs physiques
    nb_of_men_a_plus = models.IntegerField(default=0)
    nb_of_men_a = models.IntegerField(default=0)
    nb_of_men_b = models.IntegerField(default=0)
    nb_of_men_c = models.IntegerField(default=0)
    nb_of_men_opa = models.IntegerField(default=0)
    nb_of_men_c_exploitation = models.IntegerField(default=0)
    nb_of_women_a_plus = models.IntegerField(default=0)
    nb_of_women_a = models.IntegerField(default=0)
    nb_of_women_b = models.IntegerField(default=0)
    nb_of_women_c = models.IntegerField(default=0)
    nb_of_women_opa = models.IntegerField(default=0)
    nb_of_women_c_exploitation = models.IntegerField(default=0)
    # Âge moyen
    age_men_a_plus = models.IntegerField(default=0)
    age_men_a = models.IntegerField(default=0)
    age_men_b = models.IntegerField(default=0)
    age_men_c = models.IntegerField(default=0)
    age_men_opa = models.IntegerField(default=0)
    age_men_c_exploitation = models.IntegerField(default=0)
    age_women_a_plus = models.IntegerField(default=0)
    age_women_a = models.IntegerField(default=0)
    age_women_b = models.IntegerField(default=0)
    age_women_c = models.IntegerField(default=0)
    age_women_opa = models.IntegerField(default=0)
    age_women_c_exploitation = models.IntegerField(default=0)
    # Effectif selon temps de travail
    part_time_men_a_plus = models.IntegerField(default=0)
    part_time_men_a = models.IntegerField(default=0)
    part_time_men_b = models.IntegerField(default=0)
    part_time_men_c = models.IntegerField(default=0)
    part_time_men_opa = models.IntegerField(default=0)
    part_time_men_c_exploitation = models.IntegerField(default=0)
    part_time_women_a_plus = models.IntegerField(default=0)
    part_time_women_a = models.IntegerField(default=0)
    part_time_women_b = models.IntegerField(default=0)
    part_time_women_c = models.IntegerField(default=0)
    part_time_women_opa = models.IntegerField(default=0)
    part_time_women_c_exploitation = models.IntegerField(default=0)
    # Effectifs physiques
    nights_men = models.IntegerField(default=0)
    penalties_men = models.IntegerField(default=0)
    nigths_women = models.IntegerField(default=0)
    penalties_women = models.IntegerField(default=0)
    # Effectifs physiques
    cet_men = models.IntegerField(default=0)
    stocked_men = models.IntegerField(default=0)
    stocked_n_1_men = models.IntegerField(default=0)
    used_n_1_men = models.IntegerField(default=0)
    bought_men = models.IntegerField(default=0)
    cet_women = models.IntegerField(default=0)
    stocked_women = models.IntegerField(default=0)
    stocked_n_1_women = models.IntegerField(default=0)
    used_n_1_women = models.IntegerField(default=0)
    bought_women = models.IntegerField(default=0)
    # Nombre d’agents promus/promouvables (hors concours et examens pro)
    a_to_a_plus_promotable_men = models.IntegerField(default=0)
    a_to_a_plus_proposed_men = models.IntegerField(default=0)
    a_to_a_plus_promoted_men = models.IntegerField(default=0)
    a_to_a_plus_promotable_women = models.IntegerField(default=0)
    a_to_a_plus_proposed_women = models.IntegerField(default=0)
    a_to_a_plus_promoted_women = models.IntegerField(default=0)
    b_to_a_promotable_men = models.IntegerField(default=0)
    b_to_a_proposed_men = models.IntegerField(default=0)
    b_to_a_promoted_men = models.IntegerField(default=0)
    b_to_a_promotable_women = models.IntegerField(default=0)
    b_to_a_proposed_women = models.IntegerField(default=0)
    b_to_a_promoted_women = models.IntegerField(default=0)
    intern_b_promotable_men = models.IntegerField(default=0)
    intern_b_proposed_men = models.IntegerField(default=0)
    intern_b_promoted_men = models.IntegerField(default=0)
    intern_b_promotable_women = models.IntegerField(default=0)
    intern_b_proposed_women = models.IntegerField(default=0)
    intern_b_promoted_women = models.IntegerField(default=0)
    c_to_b_promotable_men = models.IntegerField(default=0)
    c_to_b_proposed_men = models.IntegerField(default=0)
    c_to_b_promoted_men = models.IntegerField(default=0)
    c_to_b_promotable_women = models.IntegerField(default=0)
    c_to_b_proposed_women = models.IntegerField(default=0)
    c_to_b_promoted_women = models.IntegerField(default=0)
    intern_c_promotable_men = models.IntegerField(default=0)
    intern_c_proposed_men = models.IntegerField(default=0)
    intern_c_promoted_men = models.IntegerField(default=0)
    intern_c_promotable_women = models.IntegerField(default=0)
    intern_c_proposed_women = models.IntegerField(default=0)
    intern_c_promoted_women = models.IntegerField(default=0)
    intern_opa_promotable_men = models.IntegerField(default=0)
    intern_opa_proposed_men = models.IntegerField(default=0)
    intern_opa_promoted_men = models.IntegerField(default=0)
    intern_opa_promotable_women = models.IntegerField(default=0)
    intern_opa_proposed_women = models.IntegerField(default=0)
    intern_opa_promoted_women = models.IntegerField(default=0)
    intern_c_exploitation_promotable_men = models.IntegerField(default=0)
    intern_c_exploitation_proposed_men = models.IntegerField(default=0)
    intern_c_exploitation_promoted_men = models.IntegerField(default=0)
    intern_c_exploitation_promotable_women = models.IntegerField(default=0)
    intern_c_exploitation_proposed_women = models.IntegerField(default=0)
    intern_c_exploitation_promoted_women = models.IntegerField(default=0)
    # Taux de mobilité année n
    incoming_men = models.IntegerField(default=0)
    intern_men = models.IntegerField(default=0)
    external_transfer_men = models.IntegerField(default=0)
    retirement_men = models.IntegerField(default=0)
    other_men = models.IntegerField(default=0)
    incoming_women = models.IntegerField(default=0)
    intern_women = models.IntegerField(default=0)
    external_transfer_women = models.IntegerField(default=0)
    retirement_women = models.IntegerField(default=0)
    other_women = models.IntegerField(default=0)
    # primes ou indemnités décidées localement
    penalty_men = models.IntegerField(default=0)
    overtime_men = models.IntegerField(default=0)
    penalty_women = models.IntegerField(default=0)
    overtime_women = models.IntegerField(default=0)
    # Nombre de jours de formation
    a_plus_training_men = models.IntegerField(default=0)
    a_training_men = models.IntegerField(default=0)
    b_training_men = models.IntegerField(default=0)
    c_training_men = models.IntegerField(default=0)
    opa_training_men = models.IntegerField(default=0)
    c_exploitation_training_men = models.IntegerField(default=0)
    a_plus_training_women = models.IntegerField(default=0)
    a_training_women = models.IntegerField(default=0)
    b_training_women = models.IntegerField(default=0)
    c_training_women = models.IntegerField(default=0)
    opa_training_women = models.IntegerField(default=0)
    c_exploitation_training_women = models.IntegerField(default=0)
    # Nombre d’agents en congé de formation professionnelle et promotionnelle
    training_leave_men = models.IntegerField(default=0)
    training_leave_women = models.IntegerField(default=0)
    # Nombre d’accidents de travail
    work_accident_men = models.IntegerField(default=0)
    work_accident_women = models.IntegerField(default=0)
    # Nombre de congés = ou sup à 6 mois pour raison familiale
    family_leave_men = models.IntegerField(default=0)
    family_leave_women = models.IntegerField(default=0)
    # Existence d’une charte du temps dans la structure ?
    time_charter = models.BooleanField()

    def get_absolute_url(self):
        return '/'

    def __unicode__(self):
        return "%s - %s" % (self.structure, self.year)

    class Meta:
        unique_together = ('structure', 'year')


class TypeOfRecruitment(models.Model):
    rsc = models.ForeignKey(RSC)
    label = models.CharField(max_length=255)
    men = models.IntegerField()
    women = models.IntegerField()


class JuryComposition(models.Model):
    rsc = models.ForeignKey(RSC)
    label = models.CharField(max_length=255)
    men = models.IntegerField()
    women = models.IntegerField()
