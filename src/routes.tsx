import MainLayout from "layout/Main";
import { createBrowserRouter, Outlet } from "react-router-dom";
import LandingPage from "pages/Landing";

export interface LoaderData {
  showDisclaimer?: boolean;
  hasScrollSize?: boolean;
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <LandingPage />,
        loader: () =>
          ({
            showDisclaimer: true,
            hasScrollSize: true,
          }) satisfies LoaderData,
      },
    ],
  },
]);

export default routes;
