<template>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
</template>
<script>
export default {
  name: 'Content',
  data () {
    return {
      msg: 'content'
    }
  }
}
</script>

<style scoped>
</style>