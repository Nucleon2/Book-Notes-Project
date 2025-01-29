import React from 'react';

function BookNoteItem({ title, note }) {
  return (
    <div style={{ border: '1px solid #333', margin: '8px', padding: '8px' }}>
      <h3>{title}</h3>
      <p>{note}</p>
    </div>
  );
}

export default BookNoteItem;
