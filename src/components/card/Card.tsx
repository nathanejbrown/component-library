import React from "react";

import "./Card.css";

export interface CardProps {
    title: string;
    body: string;
}

export default function Card ({
    title = "Card title",
    body = "This is the body of the card",
    children
}: React.PropsWithChildren<CardProps>) {
    return (
      <article data-card>
   	    <h2 className="title">{title}</h2>
        <h5>{body}</h5>
   	    {children}
      </article>
    );
}