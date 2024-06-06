<template>
  <div v-if="visible" class="modal-overlay" @click.self="hide">
    <div class="modal-content">
      <h3>{{ message }}</h3>
      <button @click="hide">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupReminder',
  props: ['message'],
  data() {
    return {
      visible: false
    };
  },
  methods: {
    show() {
      this.visible = true;
      console.log('Popup shown'); // Debug log
    },
    hide() {
      this.visible = false;
      console.log('Popup hidden'); // Debug log
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: red;
}
</style>
