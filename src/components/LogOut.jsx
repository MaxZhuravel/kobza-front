import { Button } from 'react-bootstrap'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context'

const LogOut = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext);
    function out(){
        setIsAuth(false);
        localStorage.clear();
    }
  return (
    <>
        <Button onClick={out}>Вийти</Button>
    </>
  )
}

export default LogOut