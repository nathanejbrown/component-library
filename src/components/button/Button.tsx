import React from "react";
import "./Button.css";

export interface ButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type: 'warn' | 'submit'
}

export default function Button ({
    title = "Button",
    onClick,
    type = "submit",
    children
}: React.PropsWithChildren<ButtonProps>) {
  let classes = 'library-button ' + type;
    return (
      <>
        <button className={classes} onClick={onClick}>{title}</button>
        {children}
      </>
    );
}