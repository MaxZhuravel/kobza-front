import { Button } from 'react-bootstrap'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const LogOut = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext);
    const logout = () => {
      setIsAuth(false);
      localStorage.clear();
    }
  return (
    <>
        <Button onClick={logout}>Вийти</Button>
    </>
  )
}

export default LogOut