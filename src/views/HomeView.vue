<template>
  <TopNav/>
  <SwiperTop/>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue'
import SwiperTop from '@/components/SwiperTop.vue'

export default {
  name: 'HomeView',
  components: {
    TopNav,SwiperTop,
  }
}
</script>
