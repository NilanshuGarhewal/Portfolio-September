"use client";
import React, { useState, useRef } from "react";

type Square = {
  id: number;
  x: number;
  y: number;
};

const HeroSection: React.FC = () => {
  const [squares, setSquares] = useState<Square[]>([]);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // only add a square if the mouse moved a certain distance
    if (lastPos.current) {
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 128) {
        return;
      }
    }

    const id = Date.now();
    setSquares((prev) => [...prev, { id, x, y }]);

    lastPos.current = { x, y };

    // remove after animation finishes
    setTimeout(() => {
      setSquares((prev) => prev.filter((sq) => sq.id !== id));
    }, 1000);
  };

  return (
    <div className="hero-section" onMouseMove={handleMouseMove}>
      <div className="name">
        <p className="first">Nilanshu</p>
        <p className="last">Garhewal</p>
      </div>

      {squares.map((sq) => (
        <span
          key={sq.id}
          className="cursor-square"
          style={{
            left: `${sq.x - 32}px`,
            top: `${sq.y - 32}px`,
          }}
        />
      ))}
    </div>
  );
};

export default HeroSection;
