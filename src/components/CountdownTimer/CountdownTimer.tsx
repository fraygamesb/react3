import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

const INTERVAL = 1000;
const INIT_TIMER = 10;

const CountdownTimer = () => {
  const [timer, setTimer] = useState(INIT_TIMER);
  const intervalRef = useRef(0);

  useEffect(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTimer((timer) => {
          if (timer === 1) {
            clearInterval(intervalRef.current);
          }
          return timer - 1;
        });
      }, INTERVAL);
    }
  }, []);

  return <div className={styles.timer}>{timer}</div>;
};

export default CountdownTimer;
