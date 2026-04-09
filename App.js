import React, { useEffect, useState } from "react";

function App() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/clubs")
      .then(res => res.json())
      .then(data => setClubs(data));
  }, []);

  const bookClub = (id) => {
    fetch("http://localhost:5000/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        club_id: id,
      }),
    })
      .then(res => res.json())
      .then(data => alert(data.message));
  };

  return (
    <div>
      <h1>Student Clubs</h1>
      {clubs.map(club => (
        <div key={club.id}>
          <h2>{club.name}</h2>
          <p>{club.description}</p>
          <button onClick={() => bookClub(club.id)}>
            Book
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;