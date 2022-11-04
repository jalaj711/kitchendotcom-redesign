import { useEffect, useState } from "react";

export default function Counter({ countTo }) {
  const [state, setState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //update timer
      setState((st) => {
        if (st >= countTo) {
          //Stop Timer

          clearInterval(interval);
          return st;
        } else {
          return countTo > 100 ? st + 5 : st + 1;
        }
      });
    }, countTo > 100 ? 1 : 50);
    return () => clearInterval(interval);
  }, [countTo]);

  return <>{state}</>;
}
