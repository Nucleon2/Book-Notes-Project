import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export async function getBookNotes() {
  const response = await axios.get(`${API_BASE_URL}/notes`);
  return response.data; // Assuming your server returns an array of notes
}

// You can add more functions for POST, PUT, DELETE, etc.
