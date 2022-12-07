import React, { useState, useEffect } from "react"
import { Container } from "../Container/Container";
import "./counter.scss"

type ClockProps = {
   children: React.ReactNode;
 };

 const Clock = ({
 }: ClockProps): JSX.Element =>{
   const [counter, setCounter] = React.useState(600);

  React.useEffect(() => {
   counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <Container className="counter-container">
      <Container className="counter-content-count"> 
        <span> {counter} </span> </Container>
      <Container className="counter-content-text"> 
        <span> seconds </span> </Container>
    </Container>
  );
};
export default Clock;