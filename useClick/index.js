import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      element.addEventListener("click", onClick);
    }

    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return elementRef;
};
