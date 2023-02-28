import { Contact, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <Contact>
      <p>{name}</p>
      <p>{number}</p>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
