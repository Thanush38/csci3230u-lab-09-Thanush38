import { useParams } from "react-router-dom";
import TodoList from "./TodoList.jsx";

// This component is rendered by the route "/:filter" (see App.jsx). Read the
// filter straight from the URL and show only the matching todos.
//
// TODO:
//   const { filter } = useParams()   // "all" | "active" | "completed"
//   build `visible` from `todos`: active = not done, completed = done, all = everything
//   render <TodoList todos={visible} ... />
export default function TodoView({ todos, onToggle, onDelete }) {
  // right now it ignores the filter and shows everything — fix that:
  const { filter } = useParams();
  let visible;
  if (filter === "active") {
    visible = todos.filter(todo => !todo.done);
  } else if (filter === "completed") {
    visible = todos.filter(todo => todo.done);
  } else {
    visible = todos;
  }
  return <TodoList todos={visible} onToggle={onToggle} onDelete={onDelete} />;
}
