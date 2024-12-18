import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly without animation
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // No smooth scrolling
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
