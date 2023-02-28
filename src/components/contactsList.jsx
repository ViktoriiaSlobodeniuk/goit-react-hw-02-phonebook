import { ContactItem } from './ContactItem/ContactItem';
import PropTypes from 'prop-types';

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

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
