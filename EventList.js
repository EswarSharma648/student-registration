import React from "react";
import EventCard from "./EventCard";

function EventList({ events, selectEvent }) {
  return (
    <div>
      <h2>Available Events</h2>
      {events.map(event => (
        <EventCard key={event.id} event={event} selectEvent={selectEvent} />
      ))}
    </div>
  );
}

export default EventList;