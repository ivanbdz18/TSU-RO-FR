<template>
  <div class="content">
    <div class="md-layout">
       <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Outgoing Research proceeding to CREC</h4>
            <p class="category">List of Documents</p>
          </md-card-header>
          <md-card-content>
            <fr-to-crec class="md-body-2" table-header-color="orange"></fr-to-crec>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Outgoing Research proceeding to RERC</h4>
            <p class="category">List of Documents</p>
          </md-card-header>
          <md-card-content>
            <fr-to-rerc class="md-body-2" table-header-color="orange"></fr-to-rerc>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Outgoing Research proceeding to OUP</h4>
            <p class="category">List of Documents</p>
          </md-card-header>
          <md-card-content>
            <fr-to-oup class="md-body-2" table-header-color="orange"></fr-to-oup>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  FrToCrec,
  FrToRerc,
  FrToOup
} from '@/components'

export default{
  components: {
    FrToCrec,
    FrToRerc,
    FrToOup
  },
  data () {
    return {

    }
  }
}
</script>
