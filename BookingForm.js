import React, { useState } from "react";

function BookingForm({ event, updateTickets }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [tickets, setTickets] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const ticketCount = parseInt(tickets);

    // Validation
    if (!name || !email || !department || !tickets) {
      setError("All fields are required!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format!");
      return;
    }

    if (isNaN(ticketCount) || ticketCount <= 0) {
      setError("Tickets must be a positive number!");
      return;
    }

    if (ticketCount > event.availableTickets) {
      setError("Not enough tickets available!");
      return;
    }

    // Booking Data
    const bookingData = {
      name,
      email,
      department,
      eventName: event.name,
      tickets: ticketCount,
      total: ticketCount * event.price
    };

    // Update parent (App.js)
    updateTickets(event.id, ticketCount, bookingData);

    setSuccess("Booking successful!");

    // Reset form
    setName("");
    setEmail("");
    setDepartment("");
    setTickets("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Booking for {event.name}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        /><br /><br />

        <input
          type="number"
          placeholder="Number of Tickets"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
        /><br /><br />

        <button type="submit">Confirm Booking</button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Success Message */}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default BookingForm;