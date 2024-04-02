import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./components/Users";
import SingleUser from "./components/SingleUser";
import EditUser from "./components/Edituser";
import AddUser from "./components/Adduser";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Users />,
    },
    {
      path: "/users/edit/:userId",
      element: <EditUser />,
    },
    {
      path: "/users/add",
      element: <AddUser />,
    },
    {
      path: "/users/:userId",
      element: <SingleUser />,
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
