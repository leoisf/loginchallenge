import React, { useState, useEffect } from "react"
import { Container } from "../Container/Container";
import "./Clock.scss"

 const Clock = ({
 }): JSX.Element => {
   const [currentTime, setCurrentTime] = useState(new Date());

 useEffect(() => {
   setInterval(() => setCurrentTime(new Date()), 1000);
 }, []);
 
 return (
   <Container className="clock-container" flex justify_content="center" >
      <Container>
         <Container className="clock-time-content" flex justify_content="center">
            <span>
               {
                  currentTime.toLocaleTimeString('pt-br', 
                  {  
                     timeZone: 'America/Sao_Paulo', 
                     hourCycle: 'h23',
                     hour: '2-digit', 
                     minute:'2-digit'
                  })
               }   
            </span>
         </Container>
         <Container className="clock-date-content" flex justify_content="center">
            <span>
               {currentTime.toLocaleDateString('pt-Br',{ dateStyle: 'full' } )}
            </span>
         </Container>
      </Container>
   </Container>
 );
};
export default Clock;