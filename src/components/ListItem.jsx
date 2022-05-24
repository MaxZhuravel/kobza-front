import React from 'react'
import { ListGroup,} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import classes from './ListItem.module.css'

const ListItem = ({id,index,Title}) => {
    return (
        <ListGroup.Item>
            <Link 
                to={`/articles/${id}`}
                className={classes.ListItemLink}
            >
                {index}. {Title}
            </Link>
        </ListGroup.Item>
  )
}

export default ListItem