import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [search, setSearch] = useState('');
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => setContacts([...contacts, contact]);

  const deleteContact = (id) => setContacts(contacts.filter(c => c.id !== id));

  const updateContact = (updatedContact) => {
    setContacts(contacts.map(c => c.id === updatedContact.id ? updatedContact : c));
  };

  const filteredContacts = contacts
    .filter(c => 
      c.lastName.toLowerCase().includes(search.toLowerCase()) || 
      c.firstName.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.lastName.localeCompare(b.lastName));

  return (
    <div className="container">
      <h1>Contact Manager</h1>
      
      <ContactForm 
        addContact={addContact} 
        updateContact={updateContact} 
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />

      <div className="controls">
        <input 
          className="search-bar"
          type="text" 
          placeholder="Rechercher un nom ou prénom..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ContactList 
        contacts={filteredContacts} 
        deleteContact={deleteContact} 
        setEditingContact={setEditingContact}
      />
    </div>
  );
}

export default App;