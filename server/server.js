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




app.get('/notes', (req, res) => {
  db.query("SELECT * FROM notes", (err, dbresult) => {
    if(err) {
      console.log("Error fetching data", err.stack)
    }  const mockNotes = [];
    // Loop through all rows and format them
    for (let i = 0; i < dbresult.rows.length; i++) {
      const row = dbresult.rows[i];
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
