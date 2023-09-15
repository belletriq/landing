// LAYOUTS
import MainLayout from "../../components/layouts/Main";

// PAGES
import MainPage from "../../components/pages/Main";

// ROUTES
export const ROOT = "/";

export const PUBLIC_ROUTES = {
  [ROOT]: { element: MainPage, layout: MainLayout },
};
