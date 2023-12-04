// ToggleButton.js
import React from "react";
import style from "./ToggleButton.module.css";

interface ToggleButtonProps {
  activated: boolean;
  onToggle: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ activated, onToggle }) => {
  const handleClick = () => {
    onToggle(); // Llamar a la función para cambiar el estado de activación
    debugger
  };

  return (
    <div
      onClick={handleClick}
      className={`${style.toggle} ${activated ? "" : style.active}`}
    >
      <div className={style.toggle_left} />
      <div className={style.toggle_right} />
    </div>
  );
};

export default ToggleButton;
