import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../MainPage";
import Layout from "../components/Layout";

const RouteProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/project/cinemahub",
          element: <MainPage initialProject="cinemahub" />,
        },
        {
          path: "/project/blahblah",
          element: <MainPage initialProject="blahblah" />,
        },
        {
          path: "/project/uikit",
          element: <MainPage initialProject="uikit" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouteProvider;
