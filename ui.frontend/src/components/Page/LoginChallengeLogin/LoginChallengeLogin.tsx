import React, { useState }  from "react"
import { Container } from "../../Container/Container";
import { Button } from '../../Button/Button';
import { GlobalStyle } from "../../GlobalStyle/GlobalStyle";
import Input from "../../Input/Input";
import './LoginChallengeLogin.scss';


export interface LoginChallengeLoginProps {
    title: string;
    sub_title: string;
    button: string;
    button_url: string;
    error: string
    image: {src: string};
} 

export const LoginChallengeLoginEditConfig = {

   emptyLabel: "insira aqui um conteúdo",

   isEmpty: (props: { text: any; }): boolean => !props || !props.text

 }

 const LoginChallengeLogin = ({
    title="Olá,", 
    sub_title="Para continuar navegando de forma segura, efetue o login na rede.", 
    button="Continuar", 
    button_url="/content/loginchallenge/us/en/home.html",
    error="Ops, usuário ou senha inválidos. Tente novamente!",
    image={src:"/assets/image2.png"},
 }: LoginChallengeLoginProps ): JSX.Element => { 
   const [user, setUser] = useState<any>("");
   const [password, setPassword] = useState<any>("");
   const [loginError, setloginError] = useState<any>(false);

   const handleCheckUser = (event:  any) => {
      alert(button_url);
      event.preventDefault();
      const data = { user, password };
      if (data.user && data.password === "admin") {
         setloginError(false);
        console.log(button_url);
        window.location.replace(
         button_url
        );
      } else {
         setloginError(true);
      }
   }
   console.log(loginError);
    return (
      <Container justify_content="space-between" className="login-container">
         <GlobalStyle />
         <Container flex>
            <Container className="login-content-info" >
               <Container className="login-content-info-wrapper" > 
               <div className="login-title" >
                  <h1> {title} </h1>  
                  <h2> {sub_title}</h2>                
               </div>  
               <form className="login-form">
                  <span>Login</span>
                  <Input  
                     type="name"
                     placeholder="User"
                     name="user"
                     value={user}
                     onChange={(event) => setUser( (event.target as HTMLInputElement).value )}
                  />
                  <Input 
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(event) => setPassword((event.target as HTMLInputElement).value)}
                  />
                  {      loginError &&
                     <div className="login-error" id="error" >
                     <span>{error}</span>
                  </div>
                  }
                  
                  <Button primary label={button} type="submit" onClick={handleCheckUser}> </Button> 
               </form>
               </Container>
            </Container>

            <Container className="login-content-img" style={{ backgroundImage: `url(${image.src})`}} >
            </Container>
         </Container>
      </Container>
    )
 }
 export default LoginChallengeLogin;