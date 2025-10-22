"use client";
import React, { useState } from "react";
import { CirclePicker } from "react-color";

interface ColorPickerProps {
  name?: string;
}

const ColorPicker = ({ name }: ColorPickerProps) => {
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
      <h2 className="mb-2 ">Escolha a cor</h2>
      <input type="hidden" name={name} value={color} />
      <CirclePicker
        color={color}
        colors={myColors}
        onChange={(color) => setColor(color.hex)}
      />

      <p className="mt-2">
        Cor: <span style={{ color }}>{color}</span>
      </p>
    </div>
  );
};

export default ColorPicker;
