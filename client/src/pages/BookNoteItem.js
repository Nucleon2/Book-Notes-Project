import React, { useEffect, useState } from 'react';
import BookNoteItem from '../components/BookNoteItem';
import { getBookNotes } from '../services/api';

function BookNotesPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // fetch data from the server or an external API
    getBookNotes()
      .then((res) => setNotes(res))
      .catch((err) => console.error(err));
  }, []);


  console.log(getBookNotes())

  return (
    <div>
      <h2>Book Notes</h2>
      {notes.map((note) => (
        <BookNoteItem
          key={note.id}
          title={note.title}
          note={note.content}
        />
      ))}
    </div>
  );
}

export default BookNotesPage;
