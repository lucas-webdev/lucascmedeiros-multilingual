<template>
  <div class="main-content">
    <banner
      banner-title="<strong>Lucas</strong> C. Medeiros"
      banner-subtitle="Web developer - Frontend"
    />
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <icon-list :list-items="aboutMeItems" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
import IconList from '~/components/IconList.vue'

export default {
  components: {
    Banner,
    IconList
  },
  data () {
    return {
      aboutMeItems: [
        {
          icon: 'fas fa-graduation-cap',
          text: 'Bacharel em Engenharia de Computação (2015)'
        }
      ]
    }
  }
}
</script>
<style>
.main-content {
  position: relative;
  left: 0;
}
</style>
