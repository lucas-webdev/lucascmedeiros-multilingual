<template>
  <div class="main-content">
    <banner
      banner-title="<strong>Lucas</strong> C. Medeiros"
      banner-subtitle="Web developer - Frontend"
    />
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6 />
    </v-layout>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Banner
  }
}
</script>
<style>
.main-content {
  position: relative;
  left: 0;
}
</style>
