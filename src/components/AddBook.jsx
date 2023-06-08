import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function AddBookForm() {
  const [bookId, setBookId] = useState(0);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pubDate, setPubDate] = useState("");
  const [subject, setSubject] = useState("");
  const [issued, setIssued] = useState("issued");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookRef = collection(db, "books");
      await addDoc(bookRef, {
        bookId,
        title,
        author,
        pubDate,
        subject,
        issued,
      });

      // Clear the form after successful submission
      setBookId(0);
      setTitle("");
      setAuthor("");
      setPubDate("");
      setSubject("");

      console.log("Book added successfully!");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Book ID:
        <input
          type="text"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
      </label>
      <br />
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <br />
      <label>
        Publication Date:
        <input
          type="text"
          value={pubDate}
          onChange={(e) => setPubDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Subject:
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Book</button>
    </form>
  );
}
