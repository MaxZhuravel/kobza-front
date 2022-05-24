import React from 'react'
import { ListGroup,} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import classes from './ListItem.module.css'

const ListItem = ({index,Title}) => {
    return (
        <ListGroup.Item>
            <Link 
                to={`/articles/${index}`}
                className={classes.ListItemLink}
            >
                {index}. {Title}
            </Link>
        </ListGroup.Item>
  )
}

export default ListItem