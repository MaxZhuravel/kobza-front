import React, { useContext, useState } from 'react'
import {Modal,Form,Button} from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import { AuthContext } from '../context/AuthContext';
import { getAuth } from '../REST/authorization';
import { login } from "../utils/login"

const LogIn = ({showLogIn, handleStateLogIn}) => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {user,setUser} = useContext(UserContext);
    const {isAuth,setIsAuth}=useContext(AuthContext);

    async function login(e) {
        console.log('test', e)
        e.preventDefault()
        let user = await getAuth(email,password);
        console.log('user: ', user);
        if(localStorage.getItem('kobza-jwt')){
            setIsAuth(true)
        }else{
            setIsAuth(false)
        }
        handleStateLogIn(false);
    }

  return (
    <Modal show = {showLogIn} onHide = {handleStateLogIn}>
        <Modal.Header closeButton>
            <Modal.Title>Увійти</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={(e)=>login(e)}>
                <Form.Group controlId="fromBasicEmail">
                    <Form.Label>Електронна адреса (email)</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Введіть email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">Ми ніколи не передаємо ваші дані третім особам</Form.Text>
                </Form.Group>
                <Form.Group controlId="fromBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Введіть пароль"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="fromBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me"/>
                </Form.Group>
                <Button type = "submit">Увійти</Button>
            </Form>
        </Modal.Body>
    </Modal>
  )
}

export default LogIn