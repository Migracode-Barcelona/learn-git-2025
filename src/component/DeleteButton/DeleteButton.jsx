import styles from "../DeleteButton/DeleteButton.module.css";

function DeleteButton({ onDelete }) {
  return (
    <button
      className={styles.deleteButton}
      onClick={onDelete}
      aria-label="Delete item"
    >
      Delete
    </button>
  );
}

export default DeleteButton;
