import React, { useState }  from "react"
import { UserRepo } from "../../types/Types";
import "./tabs.scss"
import { Container } from '../Container/Container';
import Button from "../Button/Button";


export interface TabsProps {
    children: React.ReactNode;
    index?: number
    className?: string
    repos?: UserRepo[]
    starreds?: UserRepo[]
}
  
const Tabs = ({
    index,
    className, 
    repos,
    starreds    
}:TabsProps):  JSX.Element => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index:number) => {
    setToggleState(index);
  };

  const getActiveClass = (index:number, className:string) =>
    ToggleState === index ? className : "";

console.log(repos);

  return (
    <Container className="container-tab">
      <ul className="tab-list">
        <li
          className={`tabs ${getActiveClass(1, "active-tabs")}`}
          onClick={() => toggleTab(1)}
        >
         <p> Repositorios </p> <span> { repos?.length }</span>
        </li>
        <li
          className={`tabs ${getActiveClass(2, "active-tabs")}`}
          onClick={() => toggleTab(2)}
        >
          Favoritos <span> { starreds?.length }</span>
        </li>
      </ul>
      <Container className="git-users-repo-content-container">
        <Container className={`content ${getActiveClass(1, "active-content")}`}>

          <Container>
               {repos?.slice(0,4).map((repo: UserRepo) => {
                  return (
                  <Container flex className="git-users-repo-card" key={repo?.id} justify_content="space-between" >
                    <Container>
                      <span>{repo?.name}</span>
                      <p>{repo?.description || "Description"}</p>
                    </Container>
                   <Container  flex className="git-users-repo-card-buttons"justify_content="center"> 
                   
                   {
                      starreds?.find((obj) => {
                        return obj.id === repo.id;
                      }) ? ( <img src="/assets/activated.png"/> ) : ( <img src="/assets/desactivated.png"/> ) 
                   }
                   
                   <Button size="small" label="Compartilhar" type="button" onClick={()=> alert(1) }> </Button>
                   </Container>
                      
                  </Container>
                  );
               })}
          </Container>
        </Container>

        <Container className={`content ${getActiveClass(2, "active-content")}`}>
        <Container>
               {starreds?.slice(0,4).map((starred: UserRepo) => {
                  return (
                  <Container flex className="git-users-repo-card" key={starred?.id} justify_content="space-between" >
                    <Container>
                      <span>{starred?.name}</span>
                      <p>{starred?.description || "Description"}</p>
                    </Container>
                   <Container  flex className="git-users-repo-card-buttons"justify_content="center"> 
                    <img src="/assets/activated.png"/>
                      <Button size="small" label="Compartilhar" type="button" onClick={()=> alert(1) }> </Button>
                   </Container>
                      
                  </Container>
                  );
               })}
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Tabs;