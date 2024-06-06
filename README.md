# Reminder-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Documentation

### Overview

This application allows users to schedule events and receive reminders when the event time is reached. The key components are:

- `TheEvents.vue`: Displays the list of events and handles reminders.
- `AddEvent.vue`: Allows users to add new events.
- `PopupReminder.vue`: Shows a popup reminder when an event is due.
- `EventService.js`: Manages event data (save, delete, retrieve).

### Components

#### TheEvents.vue

**Purpose**: Display the list of events and check for reminders.

**Key Features**:
- Fetches events from local storage on mount.
- Periodically checks if any event time matches the current time (every minute).
- Triggers a popup reminder if the event time is reached.

**Methods**:
- `fetchEvents()`: Retrieves events from the `EventService`.
- `deleteEvent(id)`: Deletes an event by its ID and refreshes the event list.
- `checkReminders()`: Checks each event to see if it's time to show a reminder.

**Lifecycle Hooks**:
- `mounted()`: Initializes event fetching and starts the reminder interval.
- `beforeUnmount()`: Clears the reminder interval when the component is destroyed.

#### AddEvent.vue

**Purpose**: Provide a form to add new events.

**Key Features**:
- Captures event details (title, description, date, time).
- Formats the date for readability.
- Saves the event using `EventService` and navigates back to the event list.

**Methods**:
- `addevent()`: Creates a new event object and saves it.
- `formatDate()`: Formats the date selected by the user.

#### PopupReminder.vue

**Purpose**: Display a popup reminder when an event is due.

**Key Features**:
- Shows a modal popup with the reminder message.
- Can be closed by clicking a button or the overlay.

**Props**:
- `message`: The reminder message to be displayed.

**Methods**:
- `show()`: Makes the popup visible.
- `hide()`: Hides the popup.

#### EventService.js

**Purpose**: Handle event data storage and retrieval.

**Classes**:
- `Event`: Represents an event with its details and a method to check if it's time to alert.
- `EventService`: Static class with methods to manage event data in local storage.

**Methods**:
- `getEvents()`: Retrieves all events from local storage.
- `saveEvent(event)`: Saves a new event to local storage.
- `deleteEvent(id)`: Deletes an event from local storage by its ID.

### How It Works

1. **Adding Events**:
   - Users add events through the `AddEvent.vue` form.
   - Events are saved with their title, description, date, and time in local storage.

2. **Displaying Events**:
   - `TheEvents.vue` fetches and displays all events from local storage.
   - Events are displayed using the `EventView` component.

3. **Checking for Reminders**:
   - Every minute, `TheEvents.vue` calls `checkReminders()`.
   - This method checks if the current time matches any event's time.
   - If a match is found, it sets the reminder message and triggers the `PopupReminder` component to display it.

4. **Showing Popup Reminders**:
   - The `PopupReminder` component shows a modal popup with the reminder message.
   - Users can close the popup by clicking the "Close" button or the overlay.

### Example

Here is a simple flow:
1. User navigates to the "Add Event" page and fills in the event details.
2. User submits the form, and the event is saved.
3. The event is displayed in the "Events schedule" list.
4. When the event time is reached, a popup reminder appears.

By following this documentation, you can understand the basic structure and functionality of the event scheduling application.
