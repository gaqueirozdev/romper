import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Auth } from "../pages/Auth";
import { ProtectedLayout } from "../layouts/ProtectedLayout";
import { RouteGuard } from "./RouteGuard";
import { Home } from "../pages/Home";
import { UserProfile } from "../pages/UserProfile";

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <App />,
    children: [
      {
        index: true,
        element: <RouteGuard children={<Auth />} />
      }
    ]
  },
  {
    path: '/register',
    element: <App />,
    children: [
      {
        index: true,
        element: <RouteGuard children={<Auth />} />
      }
    ]
  },
  {
    path: "/",
    element: <ProtectedLayout children={<App />} />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/profile',
        element: <UserProfile />
      }
    ]
  },
]);