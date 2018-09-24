<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
       <img class="img" :src="cardUserImage">
    </div>

    <md-card-content>
      <h6 class="category text-gray">Faculty Researcher</h6>
      <h4 class="card-title">Ivan Dale D. Badbaden</h4>
      <md-button class="md-round md-error" @click="signOut">Sign Out</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: 'user-card',
  props: {
    cardUserImage: {
      type: String,
      default: require('@/assets/img/tim_80x80.png')
    }
  },
  data () {
    return {
    }
  },
  methods: {
    async signOut () {
      this.$router.push('/login')
    }
  }
}

</script>
<style>

</style>
