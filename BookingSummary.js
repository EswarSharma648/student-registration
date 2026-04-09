import React from "react";

function BookingSummary({ booking }) {
  return (
    <div style={{
      marginTop: "20px",
      padding: "15px",
      backgroundColor: "#6059cd"
    }}>
      <h2>Booking Confirmation</h2>
      <p><b>Name:</b> {booking.name}</p>
      <p><b>Event:</b> {booking.eventName}</p>
      <p><b>Tickets:</b> {booking.tickets}</p>
      <p><b>Total Amount:</b> ₹{booking.total}</p>
    </div>
  );
}

export default BookingSummary;