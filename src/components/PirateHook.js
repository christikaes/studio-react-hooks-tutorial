import React from 'react';
import './PirateHook.css';

export function PirateHook({ x, y }) {
  return (
    <>
      <svg className="pirate-hook-line">
        <line
          x1={x}
          y1={y}
          x2={20}
          y2={20}
          stroke="black"
          strokeWidth={2}
          strokeDasharray={4}
        />
      </svg>
      <div style={{ top: y, left: x }} className="pirate-hook" />
      <div className="pirate" />
    </>
  );
}
