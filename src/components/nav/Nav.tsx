import React from "react";

import "./Nav.css";

export interface CardProps {
    items: string[];
    onClick?: React.MouseEventHandler<HTMLLIElement>;
}

export default function Card ({
    items,
    onClick
}: React.PropsWithChildren<CardProps>) {
    return (
      <section className="nav-container">
        <h1>Components</h1>
        {items.map((item, i) => (
          <li key={i} onClick={onClick}>{item}</li>
        ))}
      </section>
    );
}