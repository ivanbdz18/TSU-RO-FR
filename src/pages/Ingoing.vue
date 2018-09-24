<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Ingoing Research from DRC</h4>
            <p class="category">List of Documents</p>
          </md-card-header>
          <md-card-content>
            <res-from-drc class="md-body-2" table-header-color="orange"></res-from-drc>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Ingoing Research from URO</h4>
            <p class="category">List of Documents</p>
          </md-card-header>
          <md-card-content>
            <res-from-uro class="md-body-2" table-header-color="orange"></res-from-uro>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Ingoing Research from RERC</h4>
            <p class="category">List of Documents</p>
          </md-card-header>
          <md-card-content>
            <res-from-rerc class="md-body-2" table-header-color="orange"></res-from-rerc>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Ingoing Research from URO</h4>
            <p class="category">List of Documents</p>
          </md-card-header>
          <md-card-content>
            <res-from-uro2 class="md-body-2" table-header-color="orange"></res-from-uro2>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ResFromDrc,
  ResFromUro,
  ResFromRerc,
  ResFromUro2
} from '@/components'

export default{
  components: {
    ResFromDrc,
    ResFromUro,
    ResFromRerc,
    ResFromUro2
  },
  data () {
    return {

    }
  }
}
</script>
