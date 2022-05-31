import React, {useState, useContext} from 'react'
import {Modal,Form,Button} from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { registration } from '../REST/authorization';

const SignUp = ({showSignUp,handleStateSignUp}) => {
    
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {isAuth,setIsAuth}=useContext(AuthContext);

    async function login(e) {
        console.log('test', e)
        e.preventDefault()
        let user = await registration(username,email,password);
        console.log('user: ', user);
        if(localStorage.getItem('kobza-jwt')){
            setIsAuth(true)
        }else{
            setIsAuth(false)
        }
        handleStateSignUp(false);
    }

  return (
    <Modal show = {showSignUp} onHide = {handleStateSignUp}>
        <Modal.Header closeButton>
            <Modal.Title>Зареєструватись</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={(e)=>login(e)}>
                <Form.Group controlId="fromBasicUsername">
                    <Form.Label>Логін</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введіть Логін"
                        onChange={e=>setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="fromBasicEmail">
                    <Form.Label>Електронна адреса (email)</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Введіть email"   
                        onChange={e=>setEmail(e.target.value)} 
                    />
                    <Form.Text className="text-muted">
                        Ми ніколи не передаємо ваші дані третім особам
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="fromBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Введіть пароль"
                        onChange={e=>setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="fromBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me"/>
                </Form.Group>
                <Button type="submit">
                    Зареєструватись
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
  )
}

export default SignUp