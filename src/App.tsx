import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import UserListPage, { loader as userListLoader } from "./pages/UserList";
import UserDetailsPage from "./pages/UserDetails";

// Fonts
import "./fonts/Providence.ttf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <UserListPage />,
        loader: userListLoader,
      },
      {
        path: ":userId",
        element: <UserDetailsPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
