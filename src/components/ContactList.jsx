import ContactItem from './ContactItem';

const ContactList = ({ contacts, deleteContact, setEditingContact }) => {
  return (
    <div className="card">
      <h3>Liste des contacts ({contacts.length})</h3>
      {contacts.length === 0 ? <p>Aucun contact trouvé.</p> : 
        contacts.map(c => (
          <ContactItem key={c.id} contact={c} deleteContact={deleteContact} setEditingContact={setEditingContact} />
        ))
      }
    </div>
  );
};

export default ContactList;