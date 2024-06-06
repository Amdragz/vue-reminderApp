class Event {
  constructor(id, title, description, date, time) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.time = time;
  }

  isTimeToAlert() {
    const eventDateTimeString = `${this.date}T${this.time}`;
    const eventDateTime = new Date(eventDateTimeString);
    const currentTime = new Date();
    // Debug log to verify date parsing
    console.log(`Checking time for event ${this.title}: ${eventDateTime} vs ${currentTime}`);
    // Check if the current time matches the event time (within a minute range to handle small deviations)
    return Math.abs(eventDateTime - currentTime) < 60000; // 60000 ms = 1 minute
  }
}

class EventService {
  static getEvents() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    return events.map(event => new Event(event.id, event.title, event.description, event.date, event.time));
  }

  static saveEvent(event) {
    const events = this.getEvents();
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));
  }

  static deleteEvent(id) {
    let events = this.getEvents();
    events = events.filter(event => event.id !== id);
    localStorage.setItem('events', JSON.stringify(events));
  }
}

export { Event, EventService };
