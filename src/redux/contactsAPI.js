import axios from 'axios';

axios.defaults.baseURL = 'https://6836af81664e72d28e41a95c.mockapi.io'; 

export const fetchContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContact = async (contact) => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const deleteContact = async (id) => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};