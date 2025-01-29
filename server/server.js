import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pg from "pg"

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "book notes",
  password: "Ahmad2008",
  port: 5432,
})

const app = express();

db.connect();



// Example route
app.get('/notes', (req, res) => {
  // In a real app, you'd fetch this data from a database or external API.
  // const mockNotes = [
  //   { id: 1, title: 'Book A', content: 'Note for Book A...' },
  //   { id: 2, title: 'Book B', content: 'Note for Book B...' },
  // ];
  db.query("SELECT * FROM notes", (err, res) => {
    if(err) {
      console.log("Error fetching data", err.stack)
    }  const mockNotes = [];
    // Loop through all rows and format them
    for (let i = 0; i < result.rows.length; i++) {
      const row = result.rows[i];
      mockNotes.push({
        id: row.id,
        title: row.book_title,
        isbn: row.isbn,
        content: row.content
      });
    }

    // Send the response to the client
    res.json(mockNotes);
  })

});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
