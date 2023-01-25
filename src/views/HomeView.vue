<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Imagine msg="Welcome ImagineCx"/>
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
