<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/documents">
        <md-icon>work</md-icon>
        <p>Documents</p>
      </sidebar-link>
      <sidebar-link to="/ingoing">
        <md-icon>arrow_downward</md-icon>
        <p>Ingoing Research</p>
      </sidebar-link>
      <sidebar-link to="/outgoing">
        <md-icon>arrow_upward</md-icon>
        <p>Outgoing Research</p>
      </sidebar-link>
      <sidebar-link to="/profile">
        <md-icon>person</md-icon>
        <p>Profile</p>
      </sidebar-link>
      <sidebar-link to="/forms">
        <md-icon>description</md-icon>
        <p>Forms</p>
      </sidebar-link>
      <sidebar-link to="/request">
        <md-icon>send</md-icon>
        <p>Send Requests / Forms</p>
      </sidebar-link>

    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content>

      </dashboard-content>

    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    MobileMenu
  }
}
</script>
