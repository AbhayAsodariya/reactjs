import React, { useState, useEffect } from "react";

const NoteList = () => {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     fetch("https://api.example.com/notes")
//       .then((response) => response.json())
//       .then((data) => setNotes(data.notes))
//       .catch((error) => console.error("Error fetching notes:", error));
//   }, []);

  return (
    <div className="note-list">
      <h1>My Notes</h1>
      {/* {notes.map((note) => (
        <div key={note.id} className="note-item">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))} */}
    </div>
  );
};

export default NoteList;