import React from "react";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="card">
      <h2>Contact List</h2>

      {contacts.map((contact) => (
        <div key={contact._id} className="contact-item">
          <div>
            <strong>{contact.name}</strong> — {contact.email} — {contact.phone}
          </div>
          <button
            className="delete-btn"
            onClick={() => onDelete(contact._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
