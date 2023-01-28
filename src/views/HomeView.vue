<template>
  <div class="container">
    <div class="home">
      <img alt="Vue logo" src="../assets/LogoImagine.png">
      <Imagine msg="Welcome Imagine Cx"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Imagine from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    Imagine
  }
}
</script>
