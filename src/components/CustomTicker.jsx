import { useRef, useState, useEffect } from "react";
const CustomTicker = ({ children }) => {
  const [isPaused, setIsPaused] = useState(false);
  const tickerRef = useRef(null);

  const handleMouseEnter = () => {
   
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  useEffect(() => {
    if (tickerRef.current) {
        tickerRef.current.style.animationPlayState = isPaused
          ? "paused"
          : "running";
    }
  }, [isPaused, tickerRef]);
  return (
    <div className="ticker-container">
      <div
        className="trending-tokens"
        id="trending-tokens"
        ref={tickerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomTicker;
