import { Navbar } from "react-bootstrap";
import classes from './Footer.module.css'

const Footer = () => {
  return(
    <Navbar className="mt-2" bg="dark">
      <div className={classes.footer}>
          &copy; {new Date().getFullYear()} Kobza
      </div>
    </Navbar>
  )
}

export default Footer;
