import { useState, useEffect } from 'react';

const ContactForm = ({ addContact, updateContact, editingContact, setEditingContact }) => {
  const initialState = { firstName: '', lastName: '', email: '', phone: '' };
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingContact) setFormData(editingContact);
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert("Tous les champs sont obligatoires");
      return;
    }
    
    if (editingContact) {
      updateContact(formData);
    } else {
      addContact({ ...formData, id: Date.now() });
    }
    
    setFormData(initialState);
    setEditingContact(null);
  };

  return (
    <div className="card">
      <h3>{editingContact ? 'Modifier le contact' : 'Ajouter un contact'}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Prénom" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} required />
        <input type="text" placeholder="Nom" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} required />
        <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        <input type="tel" placeholder="Téléphone (ex: 06...)" pattern="[0-9]{10}" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
        <button type="submit">{editingContact ? 'Mettre à jour' : 'Ajouter'}</button>
      </form>
    </div>
  );
};

export default ContactForm;