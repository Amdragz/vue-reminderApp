<template>
  <div class="wrapper">
    <h2>Add Event</h2>
    <form @submit.prevent="addevent">
      <div class="event-title">
        <label for="title">Event title</label>
        <input type="text" id="title" required v-model="title" placeholder="Title" />
      </div>
      <div class="event-description">
        <label for="description">Description</label>
        <input type="text" id="description" required v-model="description" placeholder="Description" />
      </div>
      <div class="event-times">
        <input type="time" v-model="time" required />
        <input type="date" v-model="date" required />
      </div>
      <button type="submit" class="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { Event, EventService } from '@/components/services/eventService.js';

export default {
  name: "AddEvent",
  data() {
    return {
      title: '',
      description: '',
      date: '',
      time: ''
    };
  },
  methods: {
    addevent() {
      const event = new Event(Date.now(), this.title, this.description, this.date, this.time);
      EventService.saveEvent(event);
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: #fff;
  color: rgb(13, 13, 158);
  border-radius: 20px;
  display: grid;
  text-align: center
}

h2 {
  font-weight: bold;
  margin: 10px;  
}

form>div {
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: space-between
}

form {
    max-width: 420px;
    margin: 30px auto;
    margin-top: 0px;
    text-align: left;
    background: white;
    padding: 40px;
    border-radius: 10px;
  }

  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }

  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }

  .submit {
    text-align: center;
  }</style>
