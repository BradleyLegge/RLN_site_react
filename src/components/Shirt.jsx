import React, { useState } from "react";

export default function Shirt() {
  const [color, setColor] = useState("#3b82f6"); // default blue

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Pick a Shirt Color</h1>

      {/* Shirt SVG Preview */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-64 h-64 mb-6"
      >
        {/* Shirt body (changes color) */}
        <path
          d="M50 40 L80 20 L120 20 L150 40 L140 80 L140 160 L60 160 L60 80 Z"
          fill={color}
          stroke="black"
          strokeWidth="3"
        />

        {/* Shirt collar */}
        <path
          d="M80 20 Q100 40 120 20"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />
      </svg>

      {/* Preset colors */}
      <div className="flex gap-3 mb-6">
        {["#3b82f6", "#22c55e", "#ef4444", "#eab308", "#8b5cf6"].map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className="w-10 h-10 rounded-full border-2 border-gray-300"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>

      {/* Custom color picker */}
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-16 h-10 cursor-pointer"
      />
    </div>
  );
}
