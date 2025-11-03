import { useEffect, useRef, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { clamp } from "./utils/math";

function App() {
  const initTouchYRef = useRef(-1);
  const [yPos, setYPos] = useState(0);
  const homeRef = useRef();
  const aboutRef = useRef();

  const handleYPositionChange = (value) => {
    setYPos((oldValue) => {
      const newValue = oldValue + value;
      // Handle scrolling
      if (newValue >= 500)
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      else homeRef.current.scrollIntoView({ behavior: "smooth" });
      // Save scroll position
      return clamp(newValue, 0, 1000);
    });
  };

  const handleScroll = (e) => handleYPositionChange(e.deltaY);
  const handleTouch = (e) => {
    if (initTouchYRef.current === -1) return; // Skip if we don't have initial touch
    const deltaY = initTouchYRef.current - e.touches[0].clientY;
    console.log(deltaY);

    handleYPositionChange(deltaY);
  };
  const handleTouchDown = (e) => (initTouchYRef.current = e.touches[0].clientY);
  const handleTouchEnd = () => (initTouchYRef.current = -1);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchDown);
    window.addEventListener("touchmove", handleTouch);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchDown);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
  return (
    <div className="content">
      <div ref={homeRef} className="content-section">
        <h1>{yPos}</h1>
      </div>
      <div ref={aboutRef} className="content-section">
        <h1>{yPos}</h1>
      </div>
    </div>
  );
}

export default App;
