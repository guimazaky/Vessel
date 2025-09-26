"use client";
import React, { useState } from "react";
import { CirclePicker } from "react-color";

const CategoryColorPicker = () => {
  const [color, setColor] = useState("#00ff00");

  const myColors = [
    "#FF0000", // vermelho
    "#FF4500", // orange red
    "#FFA500", // laranja
    "#FFD700", // dourado / amarelo
    "#FFFF00", // amarelo claro
    "#008000", // verde escuro
    "#00FF00", // verde
    "#00FA9A", // spring green
    "#0000FF", // azul
    "#000080", // azul escuro
    "#00FFFF", // ciano
    "#800080", // roxo
    "#4B0082", // índigo
    "#FF69B4", // rosa forte
    "#FFC0CB", // rosa claro
    "#A52A2A", // marrom
    "#D2691E", // chocolate
    "#808080", // cinza
  ];

  return (
    <div>
      <h2 className="mb-2 font-semibold">Choose color</h2>

      <CirclePicker
        color={color}
        onChange={(updatedColor) => setColor(updatedColor.hex)}
        colors={myColors}
      />

      <p className="mt-2">
        Color: <span style={{ color }}>{color}</span>
      </p>
    </div>
  );
};

export default CategoryColorPicker;
