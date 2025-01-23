import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./layouts/default";
import Home from "./pages/";
import ViewWork from "./pages/ViewWork";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/work/{id}",
        element: <ViewWork />,
      },
    ]
  }
]);

export default router;
