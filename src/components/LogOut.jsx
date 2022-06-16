import { Button } from 'react-bootstrap'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import classes from './LogOut.module.css'

const LogOut = () => {
    const username = localStorage.getItem('kobza-username');
    const {isAuth,setIsAuth} = useContext(AuthContext);
    const logout = () => {
      setIsAuth(false);
      localStorage.clear();
    }
  return (
    <>
      <div className={classes.wrap}>
        <Link to='/cabinet/' className={classes.cab}>{username}</Link>
        <Button onClick={logout}>Вийти</Button>
      </div>
    </>
  )
}

export default LogOut