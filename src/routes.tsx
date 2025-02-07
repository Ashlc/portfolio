import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./layouts/default";
import Home from "./pages/";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
