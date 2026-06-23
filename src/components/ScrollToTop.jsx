import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 🛑 Stops the browser from forcing the user back down to their previous scroll spot on reload
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []); // Runs exactly once when the application first boots up/reloads

  useEffect(() => {
    // 🚀 Instantly forces the browser back up to coordinate 0,0 (the Navbar)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]); // Fires cleanly every time you switch pages

  return null;
};

export default ScrollToTop;