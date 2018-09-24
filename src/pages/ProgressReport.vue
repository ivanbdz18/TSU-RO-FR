<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <prog-report data-background-color="purple">

        </prog-report>
      </div>
    </div>
  </div>
</template>
<style>
.md-menu-content{
  max-width: 750px !important;
}
</style>

<script>
import {
  ProgReport
} from '@/pages'

export default{
  components: {
    ProgReport
  }
}
</script>
