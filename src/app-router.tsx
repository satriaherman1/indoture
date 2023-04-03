import Home from "@src/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    caseSensitive: true,
  },
]);

export default appRouter;
