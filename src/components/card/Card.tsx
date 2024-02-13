import React from "react";

import "./Card.css";

export interface CardProps {
    title: string;
}

export default function Card ({
    title,
    children,
}: React.PropsWithChildren<CardProps>) {
    return (
      <article data-card>
   	    <h2 className="title">{title}</h2>
   	    {children}
      </article>
    );
}