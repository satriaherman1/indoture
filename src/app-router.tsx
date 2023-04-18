import GuardRoute from "@src/components/common/GuardRoute";
import Home from "@src/pages/Home";
import Login from "@src/pages/Login";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    caseSensitive: true,
  },
  {
    path: "/login",
    element: (
      <GuardRoute>
        <Login />
      </GuardRoute>
    ),
  },
]);

export default appRouter;
