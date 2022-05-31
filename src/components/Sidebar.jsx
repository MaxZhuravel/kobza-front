import classes from './Sidebar.module.css'
import { ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <ListGroup className = {classes.sidebar}>
        <ListGroup.Item variant="dark">
          <Link to="/articles/create-article" className={classes.sidebarLink}>Додати статтю</Link>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <Link to="/" className={classes.sidebarLink}>Додати обговорення</Link>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <Link to="/" className={classes.sidebarLink}>Додати рецензію</Link>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <Link to="/" className={classes.sidebarLink}>Додати есе</Link>
        </ListGroup.Item>
      </ListGroup>
    </>
  )
}

export default Sidebar