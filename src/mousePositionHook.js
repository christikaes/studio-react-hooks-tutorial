import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('mousemove', e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    });

    return () => {
      window.removeEventListener('mousemove');
    };
  }, []);

  return mousePosition;
}
