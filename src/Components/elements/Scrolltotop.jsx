import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Scrolltotop() {
  const { pathname } = useLocation();

  // For initial page load
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // For subsequent page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // clear extra url added

  return null;
}
