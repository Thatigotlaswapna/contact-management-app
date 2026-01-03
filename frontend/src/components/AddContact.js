import React, { useState } from "react";

const AddContact = ({ onAdd }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(contact);
    setContact({ name: "", email: "", phone: "" });
  };

  return (
    <div className="card">
      <h2>Add Contact</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={contact.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={contact.email}
          onChange={handleChange}
          required
        />

        <div className="form-row">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={contact.phone}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Contact</button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
