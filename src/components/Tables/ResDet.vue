<template>
  <div>
    <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
                  <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
                  <md-table-cell md-label="Authors">{{ item.authors }}</md-table-cell>
                  </md-table-row>
    </md-table>
    <md-table v-model="users" table-header-color="orange">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  <md-table-cell md-label="Grade in UREC">{{ item.gradeUrec }}</md-table-cell>
                  <md-table-cell md-label="University Research Agenda">{{ item.univAgenda }}</md-table-cell>
                  <md-table-cell md-label="Funding Type">{{ item.funding }}</md-table-cell>
      </md-table-row>
    </md-table>
      <md-table v-model="users" table-header-color="orange">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Incentive in Publication">{{ item.publication }}</md-table-cell>
                  <md-table-cell md-label="Incentive in Presentation">{{ item.presentation }}</md-table-cell>
                  <md-table-cell md-label="Incentive in Citation">{{ item.citation }}</md-table-cell>
                  <md-table-cell md-label="Incentive in Competition">{{ item.competition }}</md-table-cell>
                  <md-table-cell md-label="Incentive in Completed Research">{{ item.completed_research }}</md-table-cell>
                 </md-table-row>
            </md-table>
          <md-button @click="goBack" class="md-raised md-danger">Go Back</md-button>
  </div>
</template>

<script>
export default {
  name: 'res-det',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      users: [
        {
          time_date: null,
          tracking_number: null,
          title: null,
          gradeCol: null
        }
      ]
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>
