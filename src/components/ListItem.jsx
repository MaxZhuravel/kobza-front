import React from 'react'
import { ListGroup,} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import classes from './ListItem.module.css'

const ListItem = ({article}) => {
    console.log(article.some-test);

    return (
        <ListGroup.Item>
            <Link 
                to={`/articles/${article?.id}`}
                className={classes.ListItemLink}
            >
                {article?.id}.{article?.name}
            </Link>
        </ListGroup.Item>
  )
}

export default ListItem