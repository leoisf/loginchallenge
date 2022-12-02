import React, { useState, useEffect } from "react"
import { Container } from "../Container/Container";

 const Clock = ({
 }): JSX.Element => {
   const [currentTime, setCurrentTime] = useState(new Date());

 useEffect(() => {
   setInterval(() => setCurrentTime(new Date()), 1000);
 }, []);
 
 return (
   <Container flex justify_content="center" >
      <Container>
         <Container flex justify_content="center">
            {currentTime.toLocaleTimeString('pt-br', {  
               timeZone: 'America/Sao_Paulo', 
               hourCycle: 'h23',
               hour: '2-digit', 
               minute:'2-digit'
            })}
         </Container>
         <Container>
            {currentTime.toLocaleDateString('pt-Br',{ dateStyle: 'full' } )}
         </Container>
      </Container>
   </Container>
 );
};
export default Clock;