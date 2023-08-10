import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import ListTask from "./components/listTasks";
import TaskForm from "./components/createTask";
import BulkDelete from "./components/bulkDelete";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/list-tasks", element: <ListTask /> },
  { path: "/create-task", element: <TaskForm /> },
  { path: "/bulk-delete", element: <BulkDelete /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
