import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PreventBackNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handlePopState = (event) => {
      // Replace the current state with the same URL, effectively preventing back navigation
      navigate(location.pathname, { replace: true });
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location, navigate]);

  return null;
};

export default PreventBackNavigation;
