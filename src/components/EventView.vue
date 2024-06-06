<template>
  <div class="wrapper">
    <div class="col1">
      <h2>{{ event.title }}</h2>
    </div>
    <div class="col2">
      <h3>{{ event.description }}</h3>
    </div>
    <div class="col3">
      <p>{{ event.time }}</p>
      <p>{{ event.date }}</p>
    </div>
    <button @click="$emit('delete', event.id)"><i class="fa-solid fa-trash"></i></button>
  </div>
</template>

<script>
  export default {
    name: 'EventView',
    props: ['event'],
    emits: ['delete'],
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  div {
    color: black;
    display: flex;
    column-gap: 5px;
  }

  .wrapper {
    display: grid;
    position: relative;
  }

  p {
    color: #1f1f1f;
  }

  h2,h3 {
    font-weight: bold;
  }

  h3 {
    color: #6b647c;
  }

  button {
    position: absolute;
    right: 0;
    top: 5px;
    background-color: transparent;
    border: none; 
  }
</style>