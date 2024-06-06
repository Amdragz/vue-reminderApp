<template>
  <div>
    <h1>Events schedule</h1>
    <ul>
      <li v-for="event in events" :key="event.id">
        <EventView :event="event" @delete="deleteEvent(event.id)" />
        <div class="rule"></div>
      </li>
    </ul>
    <PopupReminder ref="popupReminder" :message="popupMessage" />
  </div>
</template>

<script>
import EventView from './EventView.vue';
import PopupReminder from './PopupReminder.vue';
import { EventService } from '@/components/services/eventService.js';

export default {
  name: 'TheEvents',
  components: { EventView, PopupReminder },
  data() {
    return {
      events: [],
      popupMessage: '' // Initialize popup message data
    };
  },
  methods: {
    fetchEvents() {
      this.events = EventService.getEvents();
      console.log(this.events);
    },
    deleteEvent(id) {
      EventService.deleteEvent(id);
      this.fetchEvents();
    },
    checkReminders() {
      this.events.forEach(event => {
        console.log('Checking reminder for event:', event.title); // Debug log
        if (event.isTimeToAlert()) {
          this.popupMessage = `Reminder: ${event.title} is happening now!`;
          this.$refs.popupReminder.show();
          console.log('Reminder triggered for event:', event.title); // Debug log
        }
      });
    }
  },
  mounted() {
    this.fetchEvents();
    // Check for reminders every minute
    this.reminderInterval = setInterval(this.checkReminders, 60000); // 60000 ms = 1 minute
    // Test: Check reminders immediately on load for debug
    this.checkReminders();
  },
  beforeUnmount() {
    // Clear the interval when the component is destroyed
    clearInterval(this.reminderInterval);
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.nif {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  color: rgb(180, 180, 180);
  font-family: "Lora", san-serif;
  margin-bottom: 25px;
}

ul {
  background-color: #fff;
  width: 500px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(139, 135, 135, 0.5);
}

li {
  list-style: none;
}

.rule {
  width: 100%;
  margin-top: 20px;
  border: 1px solid #c1b9b9;
}</style>
