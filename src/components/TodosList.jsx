import TodoItem from "@/components/TodoItem";

const TodosList = ({ todos, ...props }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} item={todo} {...props} />
    ))}
  </ul>
);

export default TodosList;
