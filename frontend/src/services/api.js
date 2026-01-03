import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getContacts = async () => {
  const res = await axios.get(`${BASE_URL}/contacts`);
  return res.data;
};

export const addContact = async (contact) => {
  const res = await axios.post(`${BASE_URL}/contacts`, contact);
  return res.data;
};

export const updateContact = async (id, contact) => {
  const res = await axios.put(`${BASE_URL}/contacts/${id}`, contact);
  return res.data;
};

export const deleteContact = async (id) => {
  const res = await axios.delete(`${BASE_URL}/contacts/${id}`);
  return res.data;
};

