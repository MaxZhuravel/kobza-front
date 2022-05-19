import { Container, Navbar } from "react-bootstrap";

const Footer = ({children}) => {
  return(
    <div className="fixed-bottom">  
        <Navbar>
            <Container fluid>
              {children}
            </Container>
        </Navbar>
    </div>
  )
}

export default Footer;
