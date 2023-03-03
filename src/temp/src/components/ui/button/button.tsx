import React, { FC, useEffect, useState } from "react";
import styles from "./button.module.css"


interface IButtonProps {
  color: "white" | "violet";
  children: string
}

const Button: FC<IButtonProps> = ({color, children}) => {
  const [btnColor, setBtnColor] = useState("violet");

  useEffect(()=> {
    if (color === "white") {
      setBtnColor(styles.white)
    }

    if (color === "violet") {
      setBtnColor(styles.violet)
    }
  }, [color])

  return (
    <div className={`${styles.button} ${btnColor}`}>
      {children}
    </div>
  );
};

export default Button;