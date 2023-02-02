<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Prueba Técnica 1 OSvC</h1>

  </div>
</template>

<script>
export default {
  name: 'Imagine',
  props: {
    msg: String
  },
  created(){
    document.title = "Home"
  }
}
</script>