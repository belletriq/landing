import React from "react";
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import constants from "./utils/constants";

function Navigation() {
  return (
    <Router>
      <Routes>
        {Object.keys(constants.routes.PUBLIC_ROUTES).map((routeKey) => {
          const { element: Element, layout: Layout } = constants.routes.PUBLIC_ROUTES[routeKey];

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

        <Route path='*' element={<Navigate to={constants.routes.ROOT} />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
