<template >
 <div>
  <b-card>
    <b-card-title>Web Technology Stack Selector (TSS)</b-card-title>
  </b-card>
  <div class="box">
    <b-form>
      <b-row>
        <b-title><h5>Project Size</h5></b-title>
        <b-form-select
          required
          v-model="selectedData.size"
          :options="existing.size"
          class="m-md-2">
          <template v-slot:first>
          <b-form-select-option :value="null" disabled>Select Project Size</b-form-select-option>
          </template>
        </b-form-select>
      </b-row>

       <b-row>
        <b-title><h5>Project Scalability</h5></b-title>
        <b-form-select
          required
          v-model="selectedData.scalability"
          :options="existing.scalability"
          class="m-md-2">
          <template v-slot:first>
          <b-form-select-option :value="null" disabled>Select Project Scalability</b-form-select-option>
          </template>
        </b-form-select>
      </b-row>

       <b-row>
        <b-title><h5>Project Maintainability</h5></b-title>
        <b-form-select
          required
          v-model="selectedData.maintainability"
          :options="existing.maintainability"
          class="m-md-2">
          <template v-slot:first>
          <b-form-select-option :value="null" disabled>Select Project Maintainability</b-form-select-option>
          </template>
        </b-form-select>
      </b-row>

       <b-row>
        <b-title><h5>Project Security</h5></b-title>
        <b-form-select
          required
          v-model="selectedData.security"
          :options="existing.security"
          class="m-md-2">
          <template v-slot:first>
          <b-form-select-option :value="null" disabled>Select Project Security</b-form-select-option>
          </template>
        </b-form-select>
      </b-row>

       <b-row>
        <b-title><h5>Project Budget</h5></b-title>
        <b-form-select
          required
          v-model="selectedData.budget"
          :options="existing.budget"
          class="m-md-2">
          <template v-slot:first>
          <b-form-select-option :value="null" disabled>Select Project Budget</b-form-select-option>
          </template>
        </b-form-select>
      </b-row>

       <b-row>
        <b-title><h5>Project Team Experience</h5></b-title>
        <b-form-select
          required
          v-model="selectedData.team"
          :options="existing.team"
          class="m-md-2">
          <template v-slot:first>
          <b-form-select-option :value="null" disabled>Select Project Team Experience</b-form-select-option>
          </template>
        </b-form-select>
      </b-row>

      <b-row>
        <b-title><h5>Optionals</h5></b-title>
      </b-row>

      <b-row>
         <b-form-checkbox
            v-model="selectedData.customFunction"
            :options="existing.customFunction"
            switch
            size="lg"
            >
            Has Custom Functionality
          </b-form-checkbox>
      </b-row>

      <b-row>
        <b-form-checkbox
            v-model="selectedData.littleTime"
            :options="existing.littleTime"
            switch
            size="lg"
            >
            Little Time To Market
          </b-form-checkbox>
      </b-row>

      <b-row>
         <b-form-checkbox
            v-model="selectedData.highPerformance"
            :options="existing.highPerformance"
            switch
            size="lg"
            >
            Requires High Performance
          </b-form-checkbox>
      </b-row>

      <b-row>
        <b-col align-self="center">
           <b-button variant="danger" @click='reset'>Reset</b-button>
          <b-button variant="info" @click='submission'>Submit</b-button>
        </b-col>
      </b-row>
     </b-form>
   </div>
   <div class="box2">
    <b-title><h2>Result: {{stackResult.title}}</h2></b-title>
    <b-img :src="stackResult.image"
      fluid alt="Fluid image"
      height="200px"
      width="200px"/>
    <b-table striped hover :items="stackResult.statistics"/>
    <b-button v-if="isVisible" variant="success" @click="modalShow = !modalShow">View Rules Shot</b-button>
   </div>
   <div class="box3"> <center>
     Tech Stack Selector
   </center></div>
   <b-modal
    v-model="modalShow"
    size="xl"
    scrollable
    ok-only>
     <b-table striped hover :items="stackResult.rulesFired"/>
   </b-modal>
 </div>
</template>

<script>
export default {
  data () {
    return {
      selected: null,
      isVisible: false,
      modalShow: false,
      existing: {
        scalability: [
          { value: 'scalability_low', text: 'Low' },
          { value: 'scalability_medium', text: 'Medium' },
          { value: 'scalability_high', text: 'High' }
        ],
        maintainability: [
          { value: 'maintainability_low', text: 'Low' },
          { value: 'maintainability_medium', text: 'Medium' },
          { value: 'maintainability_high', text: 'High' }
        ],
        size: [
          { value: 'size_small', text: 'Small' },
          { value: 'size_mid', text: 'Medium' },
          { value: 'size_big', text: 'Big' }
        ],
        security: [
          { value: 'security_low', text: 'Low' },
          { value: 'security_medium', text: 'Medium' },
          { value: 'security_high', text: 'High' }
        ],
        budget: [
          { value: 'budget_very_limited', text: 'Very Limited' },
          { value: 'budget_limited', text: 'Limited' },
          { value: 'budget_unlimited', text: 'Unlimited' }
        ],
        team: [
          { value: 'team_novice', text: 'Novice Team' },
          { value: 'team_experienced', text: 'Experienced Team' }
        ],
        customFunction: false,
        littleTime: false,
        highPerformance: false
      },
      selectedData: {
        scalability: null,
        maintainability: null,
        size: null,
        security: null,
        budget: null,
        team: null,
        customFunction: false,
        littleTime: false,
        highPerformance: false
      },
      stackResult:  {
        title: 'Find Out!',
        rulesFired: [],
        image: 'https://image.flaticon.com/icons/png/512/36/36601.png',
        statistics: [
          {name: 'React & NodeJs', percentage: 'No Data', ruleCount: 'No Data'},
          {name: 'Vue & Laravel', percentage: 'No Data', ruleCount: 'No Data'},
          {name: 'Django & Vanilla JavaScript', percentage: 'No Data', ruleCount: 'No Data'},
          {name: 'NodeJs & Angular', percentage: 'No Data', ruleCount: 'No Data'}
        ]
      },
      rulesBool: {
        limitless_budget_allocated: false, // 1
        does_not_require_larger_budget: false, // 2
        does_not_require_large_budget: false, // 3
        security_is_important_for_the_project: false, // 4 & 5
        team_can_implement_security_feature: false, // 6
        need_framework_with_out_of_the_box_security_features: false, // 7
        need_framework_that_is_for_small_sized_project: false, // 8
        need_framework_that_is_for_mid_sized_project: false, // 9
        need_framework_that_is_for_big_sized_project: false, // 10
        need_framework_that_is_for_small_to_mid_sized_project: false, // 11
        need_framework_that_is_for_mid_to_big_sized_project: false, // 12
        project_needs_to_be_maintained_in_future: false, // 13 & 14
        project_needs_to_be_scaled_in_future: false, // 15 & 16
        project_is_to_be_developed_for_public_use: false, // 17
        project_is_to_be_developed_for_personal_use: false, // 18
        project_is_a_service_application: false, // 19
        project_needs_distributed_system_support: false, // 20
        backend_node_or_laravel: false, // 21
        need_easily_learnable_language: false, // 22
        need_framework_with_many_available_tools: false, // 23
        backend_laravel_or_django: false, // 24
        backend_node: false, // 25
        backend_laravel: false, // 26
        ans_node_angular: false, // 27
        ans_laravel_vue: false, // 28
        ans_node_react: false, // 29
        ans_django_jquery: false // 30
      }
    }
  },
  methods: {
    submission () {
      if(this.selectedData.size == null || this.selectedData.scalability == null || this.selectedData.maintainability == null || this.selectedData.security == null || this.selectedData.budget == null || this.selectedData.team == null)
        alert('Fill In The Form Properly!')
      else{
        this.isVisible = true
        this.stackResult.title = 'Find Out!'
        this.stackResult.rulesFired = []
        this.stackResult.image = 'https://image.flaticon.com/icons/png/512/36/36601.png'
        this.stackResult.statistics =  [
          {name: 'React & NodeJs', percentage: 0, ruleCount: 0},
          {name: 'Vue & Laravel', percentage: 0, ruleCount: 0},
          {name: 'Django & Vanilla JavaScript', percentage: 0, ruleCount: 0},
          {name: 'NodeJs & Angular', percentage: 0, ruleCount: 0}
        ]
        this.rule1()
      }  
    },
    reset () {
      this.selectedData.size = null
      this.selectedData.scalability = null
      this.selectedData.maintainability = null
      this.selectedData.security = null
      this.selectedData.budget = null
      this.selectedData.team = null
      this.selectedData.customFunction = false
      this.selectedData.littleTime = false
      this.selectedData.highPerformance = false
      this.isVisible = false
      this.stackResult.title = 'Find Out!'
      this.stackResult.image = 'https://image.flaticon.com/icons/png/512/36/36601.png'
      this.stackResult.statistics = [
        {name: 'React & NodeJs', percentage: 'No Data', ruleCount: 'No Data'},
        {name: 'Vue & Laravel', percentage: 'No Data', ruleCount: 'No Data'},
        {name: 'Django & Vanilla JavaScript', percentage: 'No Data', ruleCount: 'No Data'},
        {name: 'NodeJs & Angular', percentage: 'No Data', ruleCount: 'No Data'}
      ]
      this.rulesBool.limitless_budget_allocated = false // 1
      this.rulesBool.does_not_require_larger_budget = false // 2
      this.rulesBool.does_not_require_large_budget = false // 3
      this.rulesBool.security_is_important_for_the_project = false // 4 & 5
      this.rulesBool.team_can_implement_security_feature = false // 6
      this.rulesBool.need_framework_with_out_of_the_box_security_features = false // 7
      this.rulesBool.need_framework_that_is_for_small_sized_project = false // 8
      this.rulesBool.need_framework_that_is_for_mid_sized_project = false // 9
      this.rulesBool.need_framework_that_is_for_big_sized_project = false // 10
      this.rulesBool.need_framework_that_is_for_small_to_mid_sized_project = false // 11
      this.rulesBool.need_framework_that_is_for_mid_to_big_sized_project = false // 12
      this.rulesBool.project_needs_to_be_maintained_in_future = false // 13 & 14
      this.rulesBool.project_needs_to_be_scaled_in_future = false // 15 & 16
      this.rulesBool.project_is_to_be_developed_for_public_use = false // 17
      this.rulesBool.project_is_to_be_developed_for_personal_use = false // 18
      this.rulesBool.project_is_a_service_application = false // 19
      this.rulesBool.project_needs_distributed_system_support = false // 20
      this.rulesBool.backend_node_or_laravel = false // 21
      this.rulesBool.need_easily_learnable_language = false // 22
      this.rulesBool.need_framework_with_many_available_tools = false // 23
      this.rulesBool.backend_laravel_or_django = false // 24
      this.rulesBool.backend_node = false // 25
      this.rulesBool.backend_laravel = false // 26
      this.rulesBool.ans_node_angular = false // 27
      this.rulesBool.ans_laravel_vue = false // 28
      this.rulesBool.ans_node_react = false // 29
      this.rulesBool.ans_django_jquery = false // 30
    },
    rulesIncrement (stack) {
      const index = this.stackResult.statistics
        .findIndex(function (s, index) {
          return s.name === stack
        })
      this.stackResult.statistics[index].percentage++
      this.stackResult.statistics[index].ruleCount++
    },
    stats () {
      let total = this.stackResult.statistics[0].percentage + this.stackResult.statistics[1].percentage + this.stackResult.statistics[2].percentage + this.stackResult.statistics[3].percentage
      for (let i = 0; i < 4; i++) {
        this.stackResult.statistics[i].percentage = ((this.stackResult.statistics[i].percentage) / total * 100).toFixed(2)
      }
      let biggest = this.stackResult.statistics[0].percentage
      let index = 0
      for (let j = 1; j < 4; j++) {
        if (biggest < this.stackResult.statistics[j].percentage) {
          biggest = this.stackResult.statistics[j].percentage
          index = j
        }
      }
      if (index === 0) { // React & NodeJs
        this.stackResult.image = 'https://image.flaticon.com/icons/png/512/36/36601.png'
        this.stackResult.title = 'React & NodeJs'
      }
      else if (index === 1) { // Vue & Laravel
        this.stackResult.image = 'https://warlord0blog.files.wordpress.com/2018/03/vue-laravel.png'
        this.stackResult.title = 'Vue & Laravel'
      }
      else if (index === 2) { // Django & Vanilla JavaScript
        this.stackResult.image = 'https://simpleisbetterthancomplex.com/media/2016/08/featured-ajax.jpg'
        this.stackResult.title = 'Django & Vanilla JavaScript'
      }
      else { // NodeJs & Angular
        this.stackResult.image = 'https://www.angularjswiki.com/angular/is-node-js-required-for-angular-2-or-angular/featured.png'
        this.stackResult.title = 'NodeJs & Angular'
      }
    },
    rule1 () {
      if (this.selectedData.budget === 'budget_unlimited') {
        this.rulesBool.limitless_budget_allocated = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 1',
          description: 'IF unlimited_budget THEN limitless_budget_allocated',
          conclusion: 'Limitless budget allocation'
        })
        this.rulesIncrement('NodeJs & Angular')
        this.rulesIncrement('React & NodeJs')
        this.rule4()
      } else
      { this.rule2() }
    },
    rule2 () {
      if (this.selectedData.budget === 'budget_limited') {
        this.rulesBool.does_not_require_larger_budget = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 2',
          description: 'IF limited_budget THEN does_not_require_larger_budget',
          conclusion: 'Does not require larger budget'
        })
        this.rulesIncrement('Django & Vanilla JavaScript')
        this.rule4()
      }
      else  
        this.rule3()
    },
    rule3 () {
      if (this.selectedData.budget === 'budget_very_limited') {
        this.rulesBool.does_not_require_large_budget = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 3',
          description: 'IF very_llimited_budget THEN does_not_require_large_budget',
          conclusion: 'Does not require large budget'
        })
        this.rulesIncrement('Vue & Laravel')
        this.rule4()
      }
    },
    rule4 () {
      if (this.selectedData.security === 'security_medium') {
        this.rulesBool.security_is_important_for_the_project = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 4',
          description: 'IF security_mid THEN security_is_important_for_the_project',
          conclusion: 'Security is important for the project'
        })        
        this.rulesIncrement('Vue & Laravel')
        this.rulesIncrement('React & NodeJs')
        this.rulesIncrement('NodeJs & Angular')
        this.rule6()
      }
      else
        this.rule5()
    },
    rule5 () {
      if (this.selectedData.security === 'security_high') {
        this.rulesBool.security_is_important_for_the_project = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 5',
          description: 'IF security_high THEN security_is_important_for_the_project',
          conclusion: 'Security is important for the project'
        })
        this.rulesIncrement('Vue & Laravel')
        this.rulesIncrement('React & NodeJs')
        this.rulesIncrement('NodeJs & Angular')
      }
      this.rule6()
    },
    rule6 () {
      if (this.selectedData.team === 'team_experienced' &&
          this.rulesBool.security_is_important_for_the_project) {
        this.rulesBool.team_can_implement_security_feature = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 6',
          description: 'IF team_experienced AND security_is_important_for_the_project THEN  team_can_implement_security_feature',
          conclusion: 'Team can implement security features'
        })
        this.rulesIncrement('React & NodeJs')
        this.rulesIncrement('NodeJs & Angular')
        this.rule8()
      }
      else
        this.rule7()
    },
    rule7 () {
      if (this.selectedData.team === 'team_novice' &&
          this.rulesBool.security_is_important_for_the_project) {
        this.rulesBool.team_can_implement_security_feature = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 7',
          description: 'IF team_novice AND security_is_important_for_the_project THEN  need_framework_with_out_of_the_box_security_features',
          conclusion: 'Needs framework with out of the box security features'
        })
        this.rulesIncrement('Vue & Laravel')
        this.rule8()
      }
      else
        this.rule8()
    },
    rule8 () {
      if (this.selectedData.size === 'size_small') {
        this.rulesBool.need_framework_that_is_for_small_sized_project = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 8',
          description: 'IF size_small THEN need_framework_that_is_for_small_sized_project',
          conclusion: 'Needs framework that is for small sized project'
        })
        this.rulesIncrement('Vue & Laravel')
        this.rulesIncrement('Django & Vanilla JavaScript')
        this.rule11()
      }
      else
        this.rule9()
    },
    rule9 () {
      if (this.selectedData.size === 'size_mid') {
        this.rulesBool.need_framework_that_is_for_mid_sized_project = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 9',
          description: 'IF size_mid THEN need_framework_that_is_for_mid_sized_project',
          conclusion: 'Needs framework that is for medium sized project'
        })
        this.rulesIncrement('Vue & Laravel')
        this.rulesIncrement('Django & Vanilla JavaScript')
        this.rulesIncrement('React & NodeJs')
        this.rulesIncrement('NodeJs & Angular')
        this.rule11()
      }
    else
      this.rule10()
    },
    rule10 () {
      if (this.selectedData.size === 'size_big') {
        this.rulesBool.need_framework_that_is_for_big_sized_project = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 10',
          description: 'IF size_big THEN need_framework_that_is_for_big_sized_project',
          conclusion: 'Needs framework that is for big sized project'
        })
        this.rulesIncrement('React & NodeJs')
        this.rulesIncrement('NodeJs & Angular')
        this.rule11()
      }
    },
    rule11 () {
      if (this.rulesBool.need_framework_that_is_for_small_sized_project ||
         this.rulesBool.need_framework_that_is_for_mid_sized_project) {
        this.rulesBool.need_framework_that_is_for_small_to_mid_sized_project = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 11',
          description: 'IF need_framework_that_is_for_small_sized_project OR need_framework_that_is_for_mid_sized_project THEN need_framework_that_is_for_small_to_mid_sized_project',
          conclusion: 'Needs framework that is for small to mid sized project'
        })
        this.rulesIncrement('Vue & Laravel')
        this.rulesIncrement('Django & Vanilla JavaScript')
      }
      this.rule12()
    },
    rule12 () {
      if (this.rulesBool.need_framework_that_is_for_mid_sized_project ||
          this.rulesBool.need_framework_that_is_for_big_sized_project) {
        this.rulesBool.need_framework_that_is_for_mid_to_big_sized_project = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 12',
          description: 'IF need_framework_that_is_for_mid_sized_project OR need_framework_that_is_for_big_sized_project THEN need_framework_that_is_for_mid_to_big_sized_project',
          conclusion: 'Needs framework that is for mid to big sized project'
        })
        this.rulesIncrement('Vue & Laravel')
        this.rulesIncrement('Django & Vanilla JavaScript')
        this.rulesIncrement('React & NodeJs')
        this.rulesIncrement('NodeJs & Angular')
      }
      this.rule13()
    },
    rule13 () {
      if (this.selectedData.maintainability === 'maintainability_medium') {
        this.rulesBool.project_needs_to_be_maintained_in_future = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 13',
          description: 'IF maintainability_mid THEN project_needs_to_be_maintained_in_future',
          conclusion: 'Project needs to be maintained in the future'
        })
        this.rulesIncrement('React & NodeJs')
        this.rulesIncrement('NodeJs & Angular')
        this.rule15()
      }
      else
        this.rule14()
    },
    rule14 () {
      if (this.selectedData.maintainability === 'maintainability_high') {
        this.rulesBool.project_needs_to_be_maintained_in_future = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 14',
          description: 'IF maintainability_high THEN project_needs_to_be_maintained_in_future',
          conclusion: 'Project needs to be maintained in the future'
        })
        this.rulesIncrement('React & NodeJs')
        this.rulesIncrement('NodeJs & Angular')
      }
      this.rule15()
    },
    rule15 () {
      if (this.selectedData.scalability === 'scalability_mid') {
        this.rulesBool.project_needs_to_be_scaled_in_future = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 15',
          description: 'IF scalability_mid THEN project_needs_to_be_scaled_in_future',
          conclusion: 'Project needs to be scaled in the future'
        })
        this.rulesIncrement('React & NodeJs')
        this.rulesIncrement('NodeJs & Angular')
        this.rule17()
      }
      else
        this.rule16()
    },
    rule16 () {
      if (this.selectedData.scalability === 'scalability_high') {
        this.rulesBool.project_needs_to_be_scaled_in_future = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 16',
          description: 'IF scalability_high THEN project_needs_to_be_scaled_in_future',
          conclusion: 'Project needs to be scaled in the future'
        })
        this.rulesIncrement('React & NodeJs')
        this.rulesIncrement('NodeJs & Angular')
      }
      this.rule17()
    },
    rule17 () {
      if (this.rulesBool.project_needs_to_be_maintained_in_future ||
          this.rulesBool.project_needs_to_be_scaled_in_future) {
        this.rulesBool.project_is_to_be_developed_for_public_use = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 17',
          description: 'IF project_needs_to_be_maintained_in_future OR project_needs_to_be_scaled_in_future THEN project_is_to_be_deployed_for_public_use ',
          conclusion: 'Project is to be deployed for public use'
        })
        this.rulesIncrement('React & NodeJs')
        this.rulesIncrement('NodeJs & Angular')
      }
      this.rule18()
    },
    rule18 () {
      if (this.rulesBool.project_needs_to_be_maintained_in_future &&
          !(this.rulesBool.project_needs_to_be_scaled_in_future)) {
        this.rulesBool.project_is_to_be_developed_for_personal_use = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 18',
          description: 'IF project_needs_to_be_maintained_in_future AND NOT project_needs_to_be_scaled_in_future THEN project_is_to_be_developed_for_personal_use ',
          conclusion: 'Project is to be deployed for personal use'
        })
        this.rulesIncrement('Vue & Laravel')
        this.rulesIncrement('Django & Vanilla JavaScript')
      }
      this.rule19()
    },
    rule19 () {
      if (this.selectedData.customFunction &&
          this.rulesBool.project_is_to_be_developed_for_public_use) {
        this.rulesBool.project_is_a_service_application = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 19',
          description: 'IF custom_functionality AND project_is_to_be_deployed_for_public_use THEN project_is_a_service_application',
          conclusion: 'Project is a service application'
        })
        this.rulesIncrement('React & NodeJs')
        this.rulesIncrement('NodeJs & Angular')
      }
      this.rule20()
    },
    rule20 () {
      if (this.rulesBool.project_is_a_service_application &&
          this.rulesBool.requires_high_performance) {
        this.rulesBool.project_is_a_service_application = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 20',
          description: 'IF project_is_a_service_application AND requires_high_performance THEN project_needs_distributed_system_support',
          conclusion: 'Project needs distributed system support'
        })
        this.rulesIncrement('React & NodeJs')
      }
      this.rule21()
    },
    rule21 () {
      if (this.rulesBool.project_is_a_service_application &&
          this.rulesBool.security_is_important_for_the_project) {
        this.rulesBool.backend_node_or_laravel = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 20',
          description: 'IF project_is_a_service_application AND requires_high_performance THEN project_needs_distributed_system_support',
          conclusion: 'Project needs distributed system support'
        })
        this.rulesIncrement('React & NodeJs')
        this.rulesIncrement('NodeJs & Angular')
      }
      this.rule22()
    },
    rule22 () {
      if (this.rulesBool.project_is_to_be_developed_for_personal_use &&
          this.selectedData.team === 'team_novice') {
        this.rulesBool.need_easily_learnable_language = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 22',
          description: 'IF project_is_a_service_application AND team_novice THEN need_easily_learnable_language',
          conclusion: 'Need easily learbable language'
        })
        this.rulesIncrement('Vue & Laravel')
        this.rulesIncrement('Django & Vanilla JavaScript')
      }
      this.rule23()
    },
    rule23 () {
      if (this.selectedData.littleTime) {
        this.rulesBool.need_framework_with_many_available_tools = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 23',
          description: 'IF little_time_to_market THEN need_framework_with_many_available_tools',
          conclusion: 'Needs framework with many available tools'
        })
        this.rulesIncrement('Vue & Laravel')
      }
      this.rule24()
    },
    rule24 () {
      if (this.rulesBool.need_framework_that_is_for_small_to_mid_sized_project &&
          (this.rulesBool.does_not_require_large_budget ||
          this.rulesBool.does_not_require_larger_budget)) {
        this.rulesBool.backend_laravel_or_django = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 24',
          description: 'IF need_framework_that_is_for_small_to_mid_sized_project AND does_not_require_large_budget OR does_not_require_larger budget THEN backend_laravel_or_django',
          conclusion: 'Backend Laravel or Django'
        })
        this.rulesIncrement('Vue & Laravel')
        this.rulesIncrement('Django & Vanilla JavaScript')
      }
      this.rule25()
    },
    rule25 () {
      if (this.rulesBool.backend_node_or_laravel &&
          this.rulesBool.need_framework_that_is_for_mid_to_big_sized_project &&
          this.rulesBool.team_can_implement_security_feature &&
          this.rulesBool.limitless_budget_allocated) {
        this.rulesBool.backend_node = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 25',
          description: 'IF backend_node_or_laravel AND need_framework_that_is_for_mid_to_big_sized_project AND team_can_implement_security_feature AND limitless_budget_allocated THEN backend_node',
          conclusion: 'Backend Node'
        })
        this.rulesIncrement('React & NodeJs')
        this.rulesIncrement('NodeJs & Angular')
      }
      this.rule26()
    },
    rule26 () {
      if (this.rulesBool.backend_node_or_laravel &&
          this.rulesBool.need_framework_with_out_of_the_box_security_features) {
        this.rulesBool.backend_laravel = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 26',
          description: 'IF backend_node_or_laravel AND need_framework_with_out_of_the_box_security_features THEN backend_laravel',
          conclusion: 'Backend Laravel'
        })
        this.rulesIncrement('Vue & Laravel')
      }
      this.rule27()
    },
    rule27 () {
      if (this.rulesBool.backend_node &&
          !(this.rulesBool.project_needs_distributed_system_support)) {
        this.rulesBool.ans_node_angular = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 27',
          description: 'IF backend_node AND NOT project_needs_distributed_system_support THEN go for Node(Express) & Angular',
          conclusion: 'go for Node(Express) & Angular'
        })
        this.rulesIncrement('NodeJs & Angular')
        this.stats()
      }
      else
        this.rule28()
    },
    rule28 () {
      if ((this.rulesBool.backend_laravel ||
          this.rulesBool.backend_laravel_or_django) &&
          this.rulesBool.need_framework_with_many_available_tools) {
        this.rulesBool.ans_laravel_vue = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 28',
          description: 'IF backend_laravel OR backend_laravel_or_django AND need_framework_with_many_available_tools THEN go for Laravel & Vue',
          conclusion: 'go for Laravel & Vue'
        })
        this.rulesIncrement('Vue & Laravel')
        this.stats()
      }
      else
        this.rule29()
    },
    rule29 () {
      if (this.rulesBool.backend_node &&
          this.rulesBool.project_needs_distributed_system_support) {
        this.rulesBool.ans_node_react = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 29',
          description: 'IF backend_node AND project_needs_distributed_system_support THEN go for Node(Express) & React',
          conclusion: 'go for Node(Express) & React'
        })
        this.rulesIncrement('React & NodeJs')
        this.stats()
      } 
      else
        this.rule30()
    },
    rule30 () {
      if (this.rulesBool.backend_laravel_or_django &&
          this.rulesBool.need_easily_learnable_language &&
          this.selectedData.security === 'security_low') {
        this.rulesBool.ans_django_jquery = true
        this.stackResult.rulesFired.push({
          rule_number: 'Rule 30',
          description: 'IF backend_laravel_or_django AND need_easily_learnable_language AND security_low THEN go for Django & JQuery',
          conclusion: 'go for Django & JQuery'
        })
        this.rulesIncrement('Django & Vanilla JavaScript')
        this.stats()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  background-color: rgb(148, 199, 135);
  text-align: center;
  width: 30%;
  height: 90%;
  margin-left: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
  float: left;
}
.box2 {
  background-color: rgb(239, 242, 243);
  text-align: center;
  width: 50%;
  margin-right: 5%;
  margin-top: 5%;
  height:600px;
  float: right;
	}
.box3 {
 clear: left;
 text-align: center;
}
div {
  height: 90%;
  background-color:rgb(141, 180, 108);
}
</style>
