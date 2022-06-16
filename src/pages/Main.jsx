import React, { useState, useEffect } from "react";
import { getOneConversation } from "../REST/conversations";
const Main = () => {

  const [conversation, setConversation] = useState();
  const id = Math.floor(Math.random()*5);

  useEffect(() => {
    loadOneConversation()
  }, [id]);
  
  function loadOneConversation() {
    try {
      getOneConversation(id).then((data) => setConversation(data?.data))
    } catch (error) {
      console.log('Load random conversation error:', error)
    }
  }


  return (
    
    <>
      <h3 style={{padding:"15px"}}>Долучайтесь до спільноти  
        <span style={{fontWeight:"bold",color:"white",background:"#212429"}}> KOBZA </span>! 
        Зареєструйтесь і беріть участь в  
        <span style={{fontWeight:"bold",color:"white",background:"#212429"}}> Обговореннях </span>
         зараз!
      </h3>
      <br/>
      <h1>{conversation?.attributes?.Theme}</h1>
      <div>{conversation?.attributes?.Body}</div>
    </>
  )
}

export default Main;
