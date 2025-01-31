import React, { useEffect, useState } from 'react';
import BookNoteItem from '../components/BookNoteItem';
import { getBookNotes } from '../services/api';


function BookNotesPage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'http://localhost:5000';

  async function getBookNotes() {
    const response = await axios.get(`${API_BASE_URL}/notes`);
    return response.data; // Assuming your server returns an array of notes
  }

  
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await getBookNotes();
        setNotes(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching notes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;



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
