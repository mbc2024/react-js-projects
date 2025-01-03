import PropTypes from "prop-types";

export default function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>&times;</button>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onDeleteItems: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
};
