import PropTypes from 'prop-types';

export const Filter = ({ onFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onInput={e => onFilter(e.target.value)}
      />
    </div>
  );
};
Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
