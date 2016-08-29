var survey = new Vue({
  el: '#survey',
  data: {
    nb_of_men_a_plus: undefined,
    nb_of_men_a: undefined,
    nb_of_men_b: undefined,
    nb_of_men_c: undefined,
    nb_of_men_opa: undefined,
    nb_of_men_c_exploitation: undefined,
    nb_of_women_a_plus: undefined,
    nb_of_women_a: undefined,
    nb_of_women_b: undefined,
    nb_of_women_c: undefined,
    nb_of_women_opa: undefined,
    nb_of_women_c_exploitation: undefined,

    age_men_a_plus: undefined,
    age_women_a_plus: undefined,
    age_men_a: undefined,
    age_women_a: undefined,
    age_men_b: undefined,
    age_women_b: undefined,
    age_men_c: undefined,
    age_women_c: undefined,
    age_men_opa: undefined,
    age_women_opa: undefined,
    age_men_c_exploitation: undefined,
    age_women_c_exploitation: undefined,

    part_time_men_a_plus:undefined,
    part_time_men_a: undefined,
    part_time_men_b: undefined,
    part_time_men_c: undefined,
    part_time_men_opa: undefined,
    part_time_men_c_exploitation: undefined,
    part_time_women_a_plus: undefined,
    part_time_women_a: undefined,
    part_time_women_b: undefined,
    part_time_women_c: undefined,
    part_time_women_opa: undefined,
    part_time_women_c_exploitation: undefined,

    nights_men: undefined,
    nights_women: undefined,
    penalties_men: undefined,
    penalties_women: undefined,

    cet_men: undefined,
    cet_women: undefined,
    stocked_men: undefined,
    stocked_women: undefined,
    stocked_n_1_men: undefined,
    stocked_n_1_women: undefined,
    used_n_1_men: undefined,
    used_n_1_women: undefined,
    bought_men: undefined,
    bought_women: undefined,

    a_to_a_plus_promotable_men: undefined,
    a_to_a_plus_proposed_men: undefined,
    a_to_a_plus_promoted_men: undefined,
    a_to_a_plus_promotable_women: undefined,
    a_to_a_plus_proposed_women: undefined,
    a_to_a_plus_promoted_women: undefined,

    b_to_a_promotable_men: undefined,
    b_to_a_proposed_men: undefined,
    b_to_a_promoted_men: undefined,
    b_to_a_promotable_women: undefined,
    b_to_a_proposed_women: undefined,
    b_to_a_promoted_women: undefined,

    intern_b_promotable_men: undefined,
    intern_b_proposed_men: undefined,
    intern_b_promoted_men: undefined,
    intern_b_promotable_women: undefined,
    intern_b_proposed_women: undefined,
    intern_b_promoted_women: undefined,

    c_to_b_promotable_men: undefined,
    c_to_b_proposed_men: undefined,
    c_to_b_promoted_men: undefined,
    c_to_b_promotable_women: undefined,
    c_to_b_proposed_women: undefined,
    c_to_b_promoted_women: undefined,

    intern_c_promotable_men: undefined,
    intern_c_proposed_men: undefined,
    intern_c_promoted_men: undefined,
    intern_c_promotable_women: undefined,
    intern_c_proposed_women: undefined,
    intern_c_promoted_women: undefined,

    intern_opa_promotable_men: undefined,
    intern_opa_proposed_men: undefined,
    intern_opa_promoted_men: undefined,
    intern_opa_promotable_women: undefined,
    intern_opa_proposed_women: undefined,
    intern_opa_promoted_women: undefined,

    intern_c_exploitation_promotable_men: undefined,
    intern_c_exploitation_proposed_men: undefined,
    intern_c_exploitation_promoted_men: undefined,
    intern_c_exploitation_promotable_women: undefined,
    intern_c_exploitation_proposed_women: undefined,
    intern_c_exploitation_promoted_women: undefined,

    incoming_men: undefined,
    incoming_women: undefined,
    intern_men: undefined,
    intern_women: undefined,
    external_transfer_men: undefined,
    external_transfer_women: undefined,
    retirement_men: undefined,
    retirement_women: undefined,
    other_men: undefined,
    other_women: undefined,

    penalty_men: undefined,
    penalty_women: undefined,
    overtime_men: undefined,
    overtime_women: undefined,

    a_plus_training_men: undefined,
    a_plus_training_women: undefined,
    a_training_men: undefined,
    a_training_women: undefined,
    b_training_men: undefined,
    b_training_women: undefined,
    c_training_men: undefined,
    c_training_women: undefined,
    opa_training_men: undefined,
    opa_training_women: undefined,
    c_exploitation_training_men: undefined,
    c_exploitation_training_women: undefined,

    training_leave_men: undefined,
    training_leave_women: undefined,

    work_accident_men: undefined,
    work_accident_women: undefined,

    family_leave_men: undefined,
    family_leave_women: undefined,
  },
  computed: {
    total_men_women: function(){
      return this.nb_of_men_total+this.nb_of_women_total
    },

    nb_of_men_total: function() {
      return parseInt(this.nb_of_men_a_plus) + parseInt(this.nb_of_men_a) + parseInt(this.nb_of_men_b) + parseInt(this.nb_of_men_c) + parseInt(this.nb_of_men_opa) + parseInt(this.nb_of_men_c_exploitation);
    },
    nb_of_women_total: function() {
      return parseInt(this.nb_of_women_a_plus) + parseInt(this.nb_of_women_a) + parseInt(this.nb_of_women_b) + parseInt(this.nb_of_women_c) + parseInt(this.nb_of_women_opa) + parseInt(this.nb_of_women_c_exploitation);
    },
    nb_of_men_a_plus_ratio: function() {
      return this.nb_of_men_a_plus / this.nb_of_men_total
    },
    nb_of_men_a_ratio: function() {
      return this.nb_of_men_a / this.nb_of_men_total
    },
    nb_of_men_b_ratio: function() {
      return this.nb_of_men_b / this.nb_of_men_total
    },
    nb_of_men_c_ratio: function() {
      return this.nb_of_men_c / this.nb_of_men_total
    },
    nb_of_men_opa_ratio: function() {
      return this.nb_of_men_opa / this.nb_of_men_total
    },
    nb_of_men_c_exploitation_ratio: function() {
      return this.nb_of_men_c_exploitation / this.nb_of_men_total
    },
    nb_of_women_a_plus_ratio: function() {
      return this.nb_of_women_a_plus / this.nb_of_women_total
    },
    nb_of_women_a_ratio: function() {
      return this.nb_of_women_a / this.nb_of_women_total
    },
    nb_of_women_b_ratio: function() {
      return this.nb_of_women_b / this.nb_of_women_total
    },
    nb_of_women_c_ratio: function() {
      return this.nb_of_women_c / this.nb_of_women_total
    },
    nb_of_women_opa_ratio: function() {
      return this.nb_of_women_opa / this.nb_of_women_total
    },
    nb_of_women_c_exploitation_ratio: function() {
      return this.nb_of_women_c_exploitation / this.nb_of_women_total
    },
    total_men_women_a_plus: function() {
      return parseInt(this.nb_of_men_a_plus) + parseInt(this.nb_of_women_a_plus)
    },
    total_men_women_a: function() {
      return parseInt(this.nb_of_men_a) + parseInt(this.nb_of_women_a)
    },
    total_men_women_b: function() {
      return parseInt(this.nb_of_men_b) + parseInt(this.nb_of_women_b)
    },
    total_men_women_c: function() {
      return parseInt(this.nb_of_men_c) + parseInt(this.nb_of_women_c)
    },
    total_men_women_opa: function() {
      return parseInt(this.nb_of_men_opa) + parseInt(this.nb_of_women_opa)
    },
    total_men_women_c_exploitation: function() {
      return parseInt(this.nb_of_men_c_exploitation) + parseInt(this.nb_of_women_c_exploitation)
    },
    ratio_men_women_a_plus: function() {
      return parseInt(this.nb_of_men_a_plus) / parseInt(this.total_men_women_a_plus)
    },
    ratio_women_men_a_plus: function() {
      return parseInt(this.nb_of_women_a_plus) / parseInt(this.total_men_women_a_plus)
    },
    ratio_men_women_a: function() {
      return parseInt(this.nb_of_men_a) / parseInt(this.total_men_women_a)
    },
    ratio_women_men_a: function() {
      return parseInt(this.nb_of_women_a) / parseInt(this.total_men_women_a)
    },
    ratio_men_women_b: function() {
      return parseInt(this.nb_of_men_b) / parseInt(this.total_men_women_b)
    },
    ratio_women_men_b: function() {
      return parseInt(this.nb_of_women_b) / parseInt(this.total_men_women_b)
    },
    ratio_men_women_c: function() {
      return parseInt(this.nb_of_men_c) / parseInt(this.total_men_women_c)
    },
    ratio_women_men_c: function() {
      return parseInt(this.nb_of_women_c) / parseInt(this.total_men_women_c)
    },
    ratio_men_women_opa: function() {
      return parseInt(this.nb_of_men_opa) / parseInt(this.total_men_women_opa)
    },
    ratio_women_men_opa: function() {
      return parseInt(this.nb_of_women_opa) / parseInt(this.total_men_women_opa)
    },
    ratio_men_women_c_exploitation: function() {
      return parseInt(this.nb_of_men_c_exploitation) / parseInt(this.total_men_women_c_exploitation)
    },
    ratio_women_men_c_exploitation: function() {
      return parseInt(this.nb_of_women_c_exploitation) / parseInt(this.total_men_women_c_exploitation)
    },

    age_category_a_plus_mean: function() {
      return (parseFloat(this.age_men_a_plus)+parseFloat(this.age_women_a_plus))/2;
    },
    age_category_a_mean: function() {
      return (parseFloat(this.age_men_a)+parseFloat(this.age_women_a))/2;
    },
    age_category_b_mean: function() {
      return (parseFloat(this.age_men_b)+parseFloat(this.age_women_b))/2;
    },
    age_category_c_mean: function() {
      return (parseFloat(this.age_men_c)+parseFloat(this.age_women_c))/2;
    },
    age_category_opa_mean: function() {
      return (parseFloat(this.age_men_opa)+parseFloat(this.age_women_opa))/2;
    },
    age_category_c_exploitation_mean: function() {
      return (parseFloat(this.age_men_c_exploitation)+parseFloat(this.age_women_c_exploitation))/2;
    },
    age_men_mean: function() {
      return (parseFloat(this.age_men_a_plus)+parseFloat(this.age_men_a)+parseFloat(this.age_men_b)+parseFloat(this.age_men_c)+parseFloat(this.age_men_opa)+parseFloat(this.age_men_c_exploitation))/6;
    },
    age_women_mean: function() {
      return (parseFloat(this.age_women_a_plus)+parseFloat(this.age_women_a)+parseFloat(this.age_women_b)+parseFloat(this.age_women_c)+parseFloat(this.age_women_opa)+parseFloat(this.age_women_c_exploitation))/6;
    },
    age_mean: function() {
      return (this.age_men_mean + this.age_women_mean)/2;
    },

    ratio_part_time_men_a_plus: function(){
      return parseInt(this.part_time_men_a_plus)/parseInt(this.nb_of_men_a_plus);
    },
    ratio_part_time_men_a: function(){
      return parseInt(this.part_time_men_a)/parseInt(this.nb_of_men_a);
    },
    ratio_part_time_men_b: function(){
      return parseInt(this.part_time_men_b)/parseInt(this.nb_of_men_b);
    },
    ratio_part_time_men_c: function(){
      return parseInt(this.part_time_men_c)/parseInt(this.nb_of_men_c);
    },
    ratio_part_time_men_opa: function(){
      return parseInt(this.part_time_men_opa)/parseInt(this.nb_of_men_opa);
    },
    ratio_part_time_men_c_exploitation: function(){
      return parseInt(this.part_time_men_c_exploitation)/parseInt(this.nb_of_men_c_exploitation);
    },
    ratio_part_time_men: function(){
      return (parseInt(this.part_time_men_a_plus) + parseInt(this.part_time_men_a) + parseInt(this.part_time_men_b) + parseInt(this.part_time_men_c) + parseInt(this.part_time_men_opa) + parseInt(this.part_time_men_c_exploitation))/ this.nb_of_men_total
    },
    part_time_men: function(){
      return parseInt(this.part_time_men_a_plus) + parseInt(this.part_time_men_a) + parseInt(this.part_time_men_b) + parseInt(this.part_time_men_c) + parseInt(this.part_time_men_opa) + parseInt(this.part_time_men_c_exploitation)
    },

    ratio_part_time_women_a_plus: function(){
      return parseInt(this.part_time_women_a_plus)/parseInt(this.nb_of_women_a_plus);
    },
    ratio_part_time_women_a: function(){
      return parseInt(this.part_time_women_a)/parseInt(this.nb_of_women_a);
    },
    ratio_part_time_women_b: function(){
      return parseInt(this.part_time_women_b)/parseInt(this.nb_of_women_b);
    },
    ratio_part_time_women_c: function(){
      return parseInt(this.part_time_women_c)/parseInt(this.nb_of_women_c);
    },
    ratio_part_time_women_opa: function(){
      return parseInt(this.part_time_women_opa)/parseInt(this.nb_of_women_opa);
    },
    ratio_part_time_women_c_exploitation: function(){
      return parseInt(this.part_time_women_c_exploitation)/parseInt(this.nb_of_women_c_exploitation);
    },
    ratio_part_time_women: function(){
      return (parseInt(this.part_time_women_a_plus) + parseInt(this.part_time_women_a) + parseInt(this.part_time_women_b) + parseInt(this.part_time_women_c) + parseInt(this.part_time_women_opa) + parseInt(this.part_time_women_c_exploitation))/ this.nb_of_women_total
    },
    part_time_women: function(){
      return parseInt(this.part_time_women_a_plus) + parseInt(this.part_time_women_a) + parseInt(this.part_time_women_b) + parseInt(this.part_time_women_c) + parseInt(this.part_time_women_opa) + parseInt(this.part_time_women_c_exploitation)
    },

    part_time_men_women_a_plus: function(){
      return parseInt(this.part_time_men_a_plus) + parseInt(this.part_time_women_a_plus);
    },
    part_time_men_women_a: function(){
      return parseInt(this.part_time_men_a) + parseInt(this.part_time_women_a);
    },
    part_time_men_women_b: function(){
      return parseInt(this.part_time_men_b) + parseInt(this.part_time_women_b);
    },
    part_time_men_women_c: function(){
      return parseInt(this.part_time_men_c) + parseInt(this.part_time_women_c);
    },
    part_time_men_women_opa: function(){
      return parseInt(this.part_time_men_opa) + parseInt(this.part_time_women_opa);
    },
    part_time_men_women_c_exploitation: function(){
      return parseInt(this.part_time_men_c_exploitation) + parseInt(this.part_time_women_c_exploitation);
    },
    part_time_men_women: function(){
      return this.part_time_women + this.part_time_men;
    },

    ratio_nights_men: function(){
      return parseInt(this.nights_men)/this.nb_of_men_total;
    },
    ratio_nights_women: function(){
      return parseInt(this.nigths_women)/this.nb_of_women_total;
    },
    ratio_penalties_men: function(){
      return parseInt(this.penalties_men)/this.nb_of_men_total;
    },
    ratio_penalties_women: function(){
      return parseInt(this.penalties_women)/this.nb_of_women_total;
    },
    total_nights: function(){
      return parseInt(this.nights_men) + parseInt(this.nigths_women);
    },
    total_penalties: function(){
      return parseInt(this.penalties_men) + parseInt(this.penalties_women);
    },

    ratio_cet_men: function(){
      return parseInt(this.cet_men)/this.nb_of_men_total;
    },
    ratio_cet_women: function(){
      return parseInt(this.cet_women)/this.nb_of_women_total;
    },
    ratio_stocked_men: function(){
      return parseInt(this.stocked_men)/this.nb_of_men_total;
    },
    ratio_stocked_women: function(){
      return parseInt(this.stocked_women)/this.nb_of_women_total;
    },
    ratio_stocked_n_1_men: function(){
      return parseInt(this.stocked_n_1_men)/this.nb_of_men_total;
    },
    ratio_stocked_n_1_women: function(){
      return parseInt(this.stocked_n_1_women)/this.nb_of_women_total;
    },
    ratio_used_n_1_men: function(){
      return parseInt(this.used_n_1_men)/this.nb_of_men_total;
    },
    ratio_used_n_1_women: function(){
      return parseInt(this.used_n_1_women)/this.nb_of_women_total;
    },
    ratio_bought_men: function(){
      return parseInt(this.bought_men)/this.nb_of_men_total;
    },
    ratio_bought_women: function(){
      return parseInt(this.bought_women)/this.nb_of_women_total;
    },

    total_cet: function(){
      return parseInt(this.cet_men)+parseInt(this.cet_women);
    },
    ratio_cet: function(){
      return this.total_cet/this.total_men_women;
    },
    total_stocked: function(){
      return parseInt(this.stocked_men)+parseInt(this.stocked_women);
    },
    ratio_stocked: function(){
      return this.total_stocked/this.total_men_women;
    },
    total_stocked_n_1: function(){
      return parseInt(this.stocked_n_1_men)+parseInt(this.stocked_n_1_women);
    },
    ratio_stocked_n_1: function(){
      return this.total_stocked_n_1/this.total_men_women;
    },
    total_used_n_1: function(){
      return parseInt(this.used_n_1_men)+parseInt(this.used_n_1_women);
    },
    ratio_used_n_1: function(){
      return this.total_used_n_1/this.total_men_women;
    },
    total_bought: function(){
      return parseInt(this.bought_men)+parseInt(this.bought_women);
    },
    ratio_bought: function(){
      return this.total_bought/this.total_men_women;
    },

    total_promotable_men: function(){
      return parseInt(this.a_to_a_plus_promotable_men) + parseInt(this.b_to_a_promotable_men) + parseInt(this.intern_b_promotable_men) + parseInt(this.c_to_b_promotable_men) + parseInt(this.intern_c_promotable_men) + parseInt(this.intern_opa_promotable_men) + parseInt(this.intern_c_exploitation_promotable_men);
    },
    total_proposed_men: function(){
      return parseInt(this.a_to_a_plus_proposed_men) + parseInt(this.b_to_a_proposed_men) + parseInt(this.intern_b_proposed_men) + parseInt(this.c_to_b_proposed_men) + parseInt(this.intern_c_proposed_men) + parseInt(this.intern_opa_proposed_men) + parseInt(this.intern_c_exploitation_proposed_men);
    },
    total_promoted_men: function(){
      return parseInt(this.a_to_a_plus_promoted_men) + parseInt(this.b_to_a_promoted_men) + parseInt(this.intern_b_promoted_men) + parseInt(this.c_to_b_promoted_men) + parseInt(this.intern_c_promoted_men) + parseInt(this.intern_opa_promoted_men) + parseInt(this.intern_c_exploitation_promoted_men);
    },
    total_promotable_women: function(){
      return parseInt(this.a_to_a_plus_promotable_women) + parseInt(this.b_to_a_promotable_women) + parseInt(this.intern_b_promotable_women) + parseInt(this.c_to_b_promotable_women) + parseInt(this.intern_c_promotable_women) + parseInt(this.intern_opa_promotable_women) + parseInt(this.intern_c_exploitation_promotable_women);
    },
    total_proposed_women: function(){
      return parseInt(this.a_to_a_plus_proposed_women) + parseInt(this.b_to_a_proposed_women) + parseInt(this.intern_b_proposed_women) + parseInt(this.c_to_b_proposed_women) + parseInt(this.intern_c_proposed_women) + parseInt(this.intern_opa_proposed_women) + parseInt(this.intern_c_exploitation_proposed_women);
    },
    total_promoted_women: function(){
      return parseInt(this.a_to_a_plus_promoted_women) + parseInt(this.b_to_a_promoted_women) + parseInt(this.intern_b_promoted_women) + parseInt(this.c_to_b_promoted_women) + parseInt(this.intern_c_promoted_women) + parseInt(this.intern_opa_promoted_women) + parseInt(this.intern_c_exploitation_promoted_women);
    },

    ratio_proposed_men: function(){
      return this.total_proposed_men/this.total_promotable_men;
    },
    ratio_promoted_men: function(){
      return this.total_promoted_men/this.total_promotable_men;
    },
    ratio_proposed_women: function(){
      return this.total_proposed_women/this.total_promotable_women;
    },
    ratio_promoted_women: function(){
      return this.total_promoted_women/this.total_promotable_women;
    },


    ratio_incoming_men: function(){
      return parseInt(this.incoming_men)/this.nb_of_men_total;
    },
    ratio_incoming_women: function(){
      return parseInt(this.incoming_women)/this.nb_of_women_total;
    },
    ratio_intern_men: function(){
      return parseInt(this.intern_men)/this.nb_of_men_total;
    },
    ratio_intern_women: function(){
      return parseInt(this.intern_women)/this.nb_of_women_total;
    },
    ratio_external_transfer_men: function(){
      return parseInt(this.external_transfer_men)/this.nb_of_men_total;
    },
    ratio_external_transfer_women: function(){
      return parseInt(this.external_transfer_women)/this.nb_of_women_total;
    },
    ratio_retirement_men: function(){
      return parseInt(this.retirement_men)/this.nb_of_men_total;
    },
    ratio_retirement_women: function(){
      return parseInt(this.retirement_women)/this.nb_of_women_total;
    },
    ratio_other_men: function(){
      return parseInt(this.other_men)/this.nb_of_men_total;
    },
    ratio_other_women: function(){
      return parseInt(this.other_women)/this.nb_of_women_total;
    },

    total_incoming: function(){
      return parseInt(this.incoming_men) + parseInt(this.incoming_women);
    },
    total_intern: function(){
      return parseInt(this.intern_men) + parseInt(this.intern_women);
    },
    total_external_transfer: function(){
      return parseInt(this.external_transfer_men) + parseInt(this.external_transfer_women);
    },
    total_retirement: function(){
      return parseInt(this.retirement_men) + parseInt(this.retirement_women);
    },
    total_other: function(){
      return parseInt(this.other_men) + parseInt(this.other_women);
    },

    turnover_men: function(){
      return (parseInt(this.incoming_men)+parseInt(this.external_transfer_men)+parseInt(this.retirement_men)+parseInt(this.other_men))/(2*this.nb_of_men_total);
    },
    turnover_women: function(){
      return (parseInt(this.incoming_women)+parseInt(this.external_transfer_women)+parseInt(this.retirement_women)+parseInt(this.other_women))/(2*this.nb_of_women_total);
    },
    turnover: function(){
      return (parseInt(this.incoming_men)+parseInt(this.external_transfer_men)+parseInt(this.retirement_men)+parseInt(this.other_men)+parseInt(this.incoming_women)+parseInt(this.external_transfer_women)+parseInt(this.retirement_women)+parseInt(this.other_women))/(2*this.nb_of_men_total+2*this.nb_of_women_total);
    },

    ratio_penalty_men: function(){
      return parseInt(this.penalty_men)/this.nb_of_men_total;
    },
    ratio_penalty_women: function(){
      return parseInt(this.penalty_women)/this.nb_of_women_total;
    },
    ratio_overtime_men: function(){
      return parseInt(this.overtime_men)/this.nb_of_men_total;
    },
    ratio_overtime_women: function(){
      return parseInt(this.overtime_women)/this.nb_of_women_total;
    },

    total_penalty: function(){
      return parseInt(this.penalty_men) + parseInt(this.penalty_women);
    },
    total_overtime: function(){
      return parseInt(this.overtime_men) + parseInt(this.overtime_women);
    },


    total_a_plus_training: function(){
      return parseInt(this.a_plus_training_men) + parseInt(this.a_plus_training_women);
    },
    total_a_training: function(){
      return parseInt(this.a_training_men) + parseInt(this.a_training_women);
    },
    total_b_training: function(){
      return parseInt(this.b_training_men) + parseInt(this.b_training_women);
    },
    total_c_training: function(){
      return parseInt(this.c_training_men) + parseInt(this.c_training_women);
    },
    total_opa_training: function(){
      return parseInt(this.opa_training_men) + parseInt(this.opa_training_women);
    },
    total_c_exploitation_training: function(){
      return parseInt(this.c_exploitation_training_men) + parseInt(this.c_exploitation_training_women);
    },

    total_training_men: function(){
      return parseInt(this.a_plus_training_men) + parseInt(this.a_training_men) + parseInt(this.b_training_men) + parseInt(this.c_training_men) + parseInt(this.opa_training_men) + parseInt(this.c_exploitation_training_men);
    },

    total_training_women: function(){
      return parseInt(this.a_plus_training_women) + parseInt(this.a_training_women) + parseInt(this.b_training_women) + parseInt(this.c_training_women) + parseInt(this.opa_training_women) + parseInt(this.c_exploitation_training_women);
    },

    total_training: function(){
      return this.total_training_men + this.total_training_women;
    },

    ratio_a_plus_training_men: function(){
      return parseInt(this.a_plus_training_men)/this.nb_of_men_a_plus;
    },

    ratio_a_training_men: function(){
      return parseInt(this.a_training_men)/this.nb_of_men_a;
    },

    ratio_b_training_men: function(){
      return parseInt(this.b_training_men)/this.nb_of_men_b;
    },

    ratio_c_training_men: function(){
      return parseInt(this.c_training_men)/this.nb_of_men_c;
    },

    ratio_opa_training_men: function(){
      return parseInt(this.opa_training_men)/this.nb_of_men_opa;
    },

    ratio_c_exploitation_training_men: function(){
      return parseInt(this.c_exploitation_training_men)/this.nb_of_men_c_exploitation;
    },

    ratio_a_plus_training_women: function(){
      return parseInt(this.a_plus_training_women)/this.nb_of_women_a_plus;
    },

    ratio_a_training_women: function(){
      return parseInt(this.a_training_women)/this.nb_of_women_a;
    },

    ratio_b_training_women: function(){
      return parseInt(this.b_training_women)/this.nb_of_women_b;
    },

    ratio_c_training_women: function(){
      return parseInt(this.c_training_women)/this.nb_of_women_c;
    },

    ratio_opa_training_women: function(){
      return parseInt(this.opa_training_women)/this.nb_of_women_opa;
    },

    ratio_c_exploitation_training_women: function(){
      return parseInt(this.c_exploitation_training_women)/this.nb_of_women_c_exploitation;
    },

    ratio_a_plus_training: function(){
      return this.total_a_plus_training/this.total_men_women_a_plus;
    },

    ratio_a_training: function(){
      return this.total_a_training/this.total_men_women_a;
    },

    ratio_b_training: function(){
      return this.total_b_training/this.total_men_women_b;
    },

    ratio_c_training: function(){
      return this.total_c_training/this.total_men_women_c;
    },

    ratio_opa_training: function(){
      return this.total_opa_training/this.total_men_women_opa;
    },

    ratio_c_exploitation_training: function(){
      return this.total_c_exploitation_training/this.total_men_women_c_exploitation;
    },

    ratio_training_men: function(){
      return this.total_training_men / this.nb_of_men_total;
    },

    ratio_training_women: function(){
      return this.total_training_women / this.nb_of_women_total;
    },

    ratio_training: function(){
      return this.total_training / this.total_men_women;
    },

    total_training_leave: function(){
      return parseInt(this.training_leave_men) + parseInt(this.training_leave_women)
    },

    total_work_accident: function(){
      return parseInt(this.work_accident_men) + parseInt(this.work_accident_women)
    },

    ratio_work_accident_men: function(){
      return parseInt(this.work_accident_men) / this.nb_of_men_total;
    },
    ratio_work_accident_women: function(){
      return parseInt(this.work_accident_women) / this.nb_of_women_total;
    },
    ratio_work_accident: function(){
      return this.total_work_accident / this.total_men_women;
    },

    total_family_leave: function(){
      return parseInt(this.family_leave_men) + parseInt(this.family_leave_women)
    },

  }
})

survey.$watch(
  '$data',
  function(newVal, oldVal) {
    data.series[0] = [
      newVal.nb_of_men_a_plus,
      newVal.nb_of_men_a,
      newVal.nb_of_men_b,
      newVal.nb_of_men_c,
      newVal.nb_of_men_opa,
      newVal.nb_of_men_c_exploitation
    ];
    data.series[1] = [
      newVal.nb_of_women_a_plus,
      newVal.nb_of_women_a,
      newVal.nb_of_women_b,
      newVal.nb_of_women_c,
      newVal.nb_of_women_opa,
      newVal.nb_of_women_c_exploitation
    ];
    chart.update(data);
  }, {
    deep: true
  }
);

var data = {
  labels: ['A+', 'A', 'B', 'C', 'OPA', 'C Exploitation'],
  series: [
    [
      survey.$data.nb_of_men_a_plus,
      survey.$data.nb_of_men_a,
      survey.$data.nb_of_men_b,
      survey.$data.nb_of_men_c,
      survey.$data.nb_of_men_opa,
      survey.$data.nb_of_men_c_exploitation
    ],
    [
      survey.$data.nb_of_women_a_plus,
      survey.$data.nb_of_women_a,
      survey.$data.nb_of_women_b,
      survey.$data.nb_of_women_c,
      survey.$data.nb_of_women_opa,
      survey.$data.nb_of_women_c_exploitation
    ],
  ]
};

var chart = new Chartist.Bar('.ct-chart',
  data, {
    plugins: [Chartist.plugins.legend({
      legendNames: ["Hommes", "Femmes"],
      clickable: false
    })]
  });