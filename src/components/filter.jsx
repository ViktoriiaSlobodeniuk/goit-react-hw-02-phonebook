export const Filter = ({ onFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onInput={e => onFilter(e.target.value)}
      />
    </>
  );
};
