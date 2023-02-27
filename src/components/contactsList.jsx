import { ContactItem } from './contactItem';

export const ContactsList = ({ contacts, filter, onDelete }) => {
  if (filter.length) {
    const lowerCasedFilter = filter.toLowerCase();
    contacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  }

  return contacts.map(({ id, name, number }) => (
    <ContactItem
      key={id}
      name={name}
      number={number}
      id={id}
      onDelete={onDelete}
    />
  ));
};
