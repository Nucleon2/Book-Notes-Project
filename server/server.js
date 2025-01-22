const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Example route
app.get('/notes', (req, res) => {
  // In a real app, you'd fetch this data from a database or external API.
  const mockNotes = [
    { id: 1, title: 'Book A', content: 'Note for Book A...' },
    { id: 2, title: 'Book B', content: 'Note for Book B...' },
  ];

  res.json(mockNotes);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
