import React from "react";

function EventDetails({ event }) {
  return (
    <div className="event-card">
      <h2>{event.name}</h2>
      <p><b>Department:</b> {event.department}</p>
      <p><b>Date:</b> {event.date}</p>
      <p><b>Venue:</b> {event.venue}</p>
      <p><b>Price:</b> ₹{event.price}</p>
      <p><b>Available Tickets:</b> {event.availableTickets}</p>
    </div>
  );
}

export default EventDetails;