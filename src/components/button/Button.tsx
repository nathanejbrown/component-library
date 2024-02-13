import React from "react";
import "./Button.css";

export interface ButtonProps {
    title: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    type: 'warn' | 'submit'
}

export default function Button ({
    title,
    onClick,
    type,
    children
}: React.PropsWithChildren<ButtonProps>) {
    return (
      <>
        <button className={type} onClick={onClick}>{title}</button>
        {children}
      </>
    );
}