import React, { useState, useEffect } from "react"
import { Container } from "../Container/Container";

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
    <div className="App">
      <div>Countdown: {counter}</div>
    </div>
  );
};
export default Clock;