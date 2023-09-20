import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { PUBLIC_ROUTES } from "./utils/constants/routes";

import WithRedirect from "./components/hoc/withRedirect";

function Navigation() {
  return (
    <Router>
      <WithRedirect>
        <Routes>
          {Object.keys(PUBLIC_ROUTES).map((routeKey) => {
            const { element: Element, layout: Layout } = PUBLIC_ROUTES[routeKey];

            return (
              <Route
                key={routeKey}
                path={routeKey}
                element={
                  <Layout>
                    <Element />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </WithRedirect>
    </Router>
  );
}

export default Navigation;
