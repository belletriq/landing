import { useMemo } from "react";
import { useLocation, Navigate } from "react-router-dom";

import HEADER_NAV_ITEMS from "../../utils/constants/header";
import { PUBLIC_ROUTES, ROOT } from "../../utils/constants/routes";

function WithRedirect({ children }) {
  const { pathname, hash } = useLocation();
  const pathList = useMemo(() => Object.keys(PUBLIC_ROUTES), []);
  const hashList = useMemo(() => Object.keys(HEADER_NAV_ITEMS), []);

  const isPathValid = pathList.includes(pathname);
  const isHashActive = hash === "" || hashList.includes(hash);

  if (!isPathValid || !isHashActive) {
    return <Navigate to={ROOT} />;
  }

  return children;
}

export default WithRedirect;
