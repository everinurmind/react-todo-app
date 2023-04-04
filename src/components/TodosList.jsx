import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import TodoItem from '@/components/TodoItem';

const TodosList = ({
  todos, handleChange, delTodo, setUpdates,
}) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        item={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdates={setUpdates}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdates: PropTypes.func.isRequired,
};

export default TodosList;
