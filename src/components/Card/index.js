import React from 'react';
import { CardContainer, CardFooter, CardContent } from "./style";

export function Card(props) {
   return <CardContainer>
      <h2 title={props.produto.title}>
         &#127919; <u >{props.produto.title} </u>
      </h2>
      <CardContent
         title={props.produto.description}>
         {props.produto.description}
      </CardContent>
      <CardFooter>
         <span>&#128176; R$ {props.produto.price.toFixed(2).replace(".", ",")}</span>
         <span>&#8987; {props.produto.dueDate.slice(0, 10)} </span>
      </CardFooter>
   </CardContainer>
}