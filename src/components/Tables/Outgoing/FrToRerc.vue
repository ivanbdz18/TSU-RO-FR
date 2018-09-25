<template>
  <div>
    <md-table v-model="documentsState9" :table-header-color="tableHeaderColor">
      <md-table-row class="md-body-2" slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Date">{{ item.received }}</md-table-cell>
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
        <md-table-cell md-label="Grade in UREC">{{ item.gradeUrec }}</md-table-cell>
        <md-table-cell md-label="Incentive">{{ item.incentive }}</md-table-cell>
        <md-table-cell md-label="University Agenda">{{ item.univAgenda }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>get_app</md-icon>
            <md-tooltip md-direction="bottom">Download</md-tooltip>
          </md-button>
          <md-button class="md-raised md-success" @click.native="proceed(item.id)">Proceed</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'fr-to-rerc',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      documents: [],
      documentsState9: []
    }
  },
  created: async function () {
    await this.getDocuments()
  },
  methods: {
    proceed: async function (documentId) {
      const rootApi = process.env.VUE_APP_ROOT_API
      await axios.post(`${rootApi}/documents/${documentId}/release`)
      await this.getDocuments()
    },
    getDocuments: async function () {
      const rootApi = process.env.VUE_APP_ROOT_API
      this.documents = (await axios.get(`${rootApi}/documents`)).data
      this.documentsState9 = this.documents.filter(d => d.state === 9 && d.received !== null)
    }
  }
}
</script>
