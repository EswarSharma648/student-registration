import React from "react";

function EventCard({ event, selectEvent }) {
  return (
    <div style={{
      border: "1px solid Grey",
      padding: "10px",
      marginBottom: "10px"
    }}>
      <h3>{event.name}</h3>
      <p>Department: {event.department}</p>
      <p>Date: {event.date}</p>
      <p>Venue: {event.venue}</p>
      <p>Price: ₹{event.price}</p>
      <p>Available Tickets: {event.availableTickets}</p>

      <button onClick={() => selectEvent(event)}>
        Book Now
      </button>
    </div>
  );
}

export default EventCard;