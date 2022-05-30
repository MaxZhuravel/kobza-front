import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { login } from "../utils/login"

const About = () => {
  const {user,setUser} = useContext(UserContext);
  return (
    <>
      <h1>Про нас</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? <button onClick = {()=>{
        //call logout
        setUser(null);
      }}>Logout</button> :
      <button 
        onClick={ async () => {
          const user = await login();
          setUser(user);

          }
        }>
          login
        </button>
      }
    </>
  )
}

export default About;
