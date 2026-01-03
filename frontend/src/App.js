import React, { useEffect, useState } from "react";
import { getContacts, addContact, deleteContact } from "./services/api";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleAddContact = async (contact) => {
    await addContact(contact);
    fetchContacts();
  };

  const handleDeleteContact = async (id) => {
    await deleteContact(id);
    fetchContacts();
  };

  return (
    <div className="app-container">
      <h1>Contact Management App</h1>

      <AddContact onAdd={handleAddContact} />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;

