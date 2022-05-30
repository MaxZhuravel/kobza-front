import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Main = () => {
  const {user,setUser} = useContext(UserContext);
  return (
    <>
      <h1>Головна сторінка</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}

export default Main;
