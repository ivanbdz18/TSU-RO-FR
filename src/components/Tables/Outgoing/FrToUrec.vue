<template>
  <div>
    <md-table v-model="documentsState6" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Date">{{ item.received }}</md-table-cell>
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Authors">{{ item.author }}</md-table-cell>
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
  name: 'fr-to-urec',
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
      documentsState6: [
        {
          received: '12/05/18 04:41:25',
          tracking_number: '75os6155-6e5f-642k',
          title: 'Can Online Word of Mouth Assign a Product Price?',
          author: 'Antonio Tinio, Kevin Morales, Joshua Carreon'
        }
      ]
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
      this.documentsState6 = this.documents.filter(d => d.state === 6 && d.received !== null)
    }
  }
}
</script>
