import React, {useContext,useEffect,useState} from 'react'
import { Nav, Modal, Navbar, Container} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import Styles from './LayoutStyles';
import { Footer } from '..';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import LogOut from '../LogOut';
import Authorization from '../Authorization';
import { AuthContext } from '../../context/AuthContext';

const Layout = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);
    useEffect(()=>{
        if(localStorage.getItem('kobza-jwt')){
            setIsAuth(true);
        }
    },[])

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");

    const[showLogIn,setShowLogIn] = useState(false);
    const[showSignUp,setShowSignUp] = useState(false);

    const handleStateLogIn=()=>showLogIn === true ? setShowLogIn(false) : setShowLogIn(true);
    const handleStateSignUp=()=>showSignUp === true ? setShowSignUp(false) : setShowSignUp(true);

  return (
    <>
        <Styles>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/">KOBZA</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id = "responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/articles">Статті</Link></Nav.Link>
                            <Nav.Link><Link to="/about">Про нас</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            {isAuth ?
                                <LogOut/>
                            :
                                <Authorization 
                                    handleStateLogIn={handleStateLogIn}
                                    handleStateSignUp={handleStateSignUp}
                                />
                        }  
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>

        <LogIn 
            showLogIn={showLogIn} 
            handleStateLogIn={handleStateLogIn} 
            email={email} 
            password={password} 
            setEmail={setEmail}
            setPassword={setPassword}
        />
        <SignUp 
            showSignUp={showSignUp} 
            handleStateSignUp={handleStateSignUp}
            email={email} 
            password={password} 
            username={username}
            setEmail={setEmail}
            setPassword={setPassword}
            setUsername={setUsername}
        />

        <Container fluid>
            <Outlet/>
        </Container>

        <Footer>
            &copy; {new Date().getFullYear()} Kobza
        </Footer>
    </>
  )
}

export default Layout;
