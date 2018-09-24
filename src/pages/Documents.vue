<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Upload Research</h4>
          </md-card-header>
          <md-card-content class="md-body-2">
            <upload-research class="md-body-2" table-header-color="orange"></upload-research>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Research Documents</h4>
          </md-card-header>
          <md-card-content class="md-body-2">
            <documents-table class="md-body-2" table-header-color="orange"></documents-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>
<style scoped>
 .md-table-head-label {
   font-weight: 400;
 }
 .md-menu-content{
  max-width: 90px !important;
}
</style>

<script>
import {
  DocumentsTable,
  UploadResearch
} from '@/components'

export default{
  components: {
    DocumentsTable,
    UploadResearch
  },
  data () {
    return {

    }
  }
}
</script>
