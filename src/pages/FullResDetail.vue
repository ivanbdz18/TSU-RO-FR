<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Research Detail</h4>
          </md-card-header>
          <md-card-content>
            <res-det class="md-body-2" table-header-color="blue"></res-det>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ResDet
} from '@/components'

export default{
  components: {
    ResDet
  },
  data () {
    return {

    }
  }
}
</script>
