<template>
  <div>
    <md-dialog-confirm
      :md-active.sync="active"
      md-title="Do You Really Want To Update/Replace?"
      md-content="Replacing the current file."
      md-confirm-text="Yes"
      md-cancel-text="No"
      @md-cancel="onCancel"
      @md-confirm="onConfirm" />
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Track No.">{{ item.track }}</md-table-cell>
        <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Author">{{ item.author }}</md-table-cell>
        <md-table-cell md-label="Track Document">
          <md-button to="tracking" class="md-just-icon md-simple md-primary">
            <md-icon>remove_red_eye</md-icon>
            <md-tooltip md-direction="bottom">Track Document</md-tooltip>
          </md-button>
        </md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-raised md-primary" @click="active = true">Update</md-button>
          <md-button class="md-raised md-success" to="/progreport">Progress Report
            <md-tooltip md-direction="bottom">Upload Progress Report</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script> // TODO
export default {
  name: 'documents-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      active: false,
      selected: [],
      users: [
        {
          track: 1001,
          title: 'Faculty Research Tracker',
          author: 'Ivan Badbaden, Anjeanette Francia'
        },
        {
          track: 1002,
          title: 'Student Research Tracker',
          author: 'Nomar Lapitan, Michelle Quibuyen'
        }
      ]
    }
  },
  methods: {
    onConfirm () {
      this.value = 'Agreed'
    },
    onCancel () {
      this.value = 'Disagreed'
    }
  }
}
</script>
