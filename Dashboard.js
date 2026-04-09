import React from "react";

function Dashboard({ bookings }) {
  const totalTickets = bookings.reduce(
    (sum, booking) => sum + booking.tickets,
    0
  );

  const totalAmount = bookings.reduce(
    (sum, booking) => sum + booking.total,
    0
  );

  return (
    <div className="dashboard-card">
      <h2>📊 Student Dashboard</h2>

      <p><strong>Total Bookings:</strong> {bookings.length}</p>
      <p><strong>Total Tickets Booked:</strong> {totalTickets}</p>
      <p><strong>Total Amount Spent:</strong> ₹{totalAmount}</p>

      {bookings.length > 0 && (
        <>
          <h3>Booking History</h3>
          <ul>
            {bookings.map((booking, index) => (
              <li key={index}>
                {booking.name} booked {booking.tickets} ticket(s) 
                for {booking.eventName} (₹{booking.total})
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Dashboard;