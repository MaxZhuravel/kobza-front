import React from 'react'
import { ListGroup } from 'react-bootstrap'

const ListItem = (props) => {

  return (
    <ListGroup.Item><div>Name: {props.article.name}</div></ListGroup.Item>
  )
}

export default ListItem