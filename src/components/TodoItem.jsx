import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({
  item,
  handleChange,
  delTodo,
  setUpdates,
}) => {
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(item.title);
  const style = {
    color: '#5e5e5e',
    fontSize: '1.25rem',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setUpdates(updateInput, item.id);
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => handleChange(item.id)}
        />
        <button onClick={handleEditing} type="button">
          <AiFillEdit style={style} />
        </button>
        <button onClick={() => delTodo(item.id)} type="button">
          <FaTrash style={style} />
        </button>
        <span
          className={
            item.completed
              ? `${styles.completedTask} ${styles.taskName}`
              : styles.taskName
          }
        >
          {updateInput}
        </span>
      </div>
      <input
        type="text"
        value={updateInput}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdates: PropTypes.func.isRequired,
};

export default TodoItem;
