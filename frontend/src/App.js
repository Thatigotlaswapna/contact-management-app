import { useState, useEffect } from "react";

// Use the environment variable for backend API
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Fetch contacts from backend on load
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);

  // Add new contact
  const handleAddContact = async () => {
    if (!name || !email || !phone) return alert("Fill all fields");

    const newContact = { name, email, phone };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact),
      });
      const savedContact = await res.json();
      setContacts([...contacts, savedContact]);
      setName(""); setEmail(""); setPhone("");
    } catch (err) {
      console.error("Error adding contact:", err);
    }
  };

  // Delete contact
  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setContacts(contacts.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Error deleting contact:", err);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Contact Management App</h1>

      <h2>Add Contact</h2>
      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleAddContact}>Add Contact</button>

      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            <strong>{contact.name}</strong> — {contact.email} — {contact.phone}{" "}
            <button onClick={() => handleDelete(contact._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
