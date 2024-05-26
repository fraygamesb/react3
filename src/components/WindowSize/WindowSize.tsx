import { useEffect, useState } from "react";
import styles from "./style.module.css";

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className={styles.windowSize}>
      <p>
        Размер окна: {windowSize.width} {windowSize.height}
      </p>
    </div>
  );
};

export default WindowSize;
