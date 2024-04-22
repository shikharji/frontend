import "./StyleElements.css";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

export default function Gototop() {
  const [isTop, setIsTop] = useState(true);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 600, // Scroll duration in milliseconds
      smooth: "easeInOutQuad", // Easing function
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!isTop && (
        <div id="gototop">
          <button onClick={scrollToTop} className="gototop-btn">
            Go to top!
          </button>
        </div>
      )}
    </>
  );
}
