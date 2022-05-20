import React from 'react'
import { ListGroup,} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import classes from './ListItem.module.css'

const ListItem = (props) => {

  return (
        <ListGroup.Item>
                <Link 
                    to={`/articles/${props.article.id}`}
                    className={classes.ListItemLink}
                >
                    {props.article.id}.{props.article.name}
                </Link>
        </ListGroup.Item>
  )
}

export default ListItem