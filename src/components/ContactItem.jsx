const ContactItem = ({ contact, deleteContact, setEditingContact }) => {
  return (
    <div className="contact-item">
      <div>
        <strong>{contact.firstName} {contact.lastName.toUpperCase()}</strong>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>
          {contact.email} | {contact.phone}
        </p>
      </div>
      <div className="actions">
        <button className="btn-edit" onClick={() => setEditingContact(contact)}>Modifier</button>
        <button className="btn-delete" onClick={() => deleteContact(contact.id)}>Supprimer</button>
      </div>
    </div>
  );
};

export default ContactItem;