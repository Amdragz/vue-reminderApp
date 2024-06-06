<template>
  <div class="about">
    <AddEvent />
  </div>
</template>

<style>
  .about {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<script>
import AddEvent from '@/components/AddEvent.vue';
export default {
  name: 'AboutView',
  components: { AddEvent }
}
</script>
