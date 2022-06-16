import React from 'react'
import { Container } from 'react-bootstrap'

const Cabinet = () => {
    const username = localStorage.getItem('kobza-username')
  return (
    <>
      <Container fluid>
          <h2>Вітаємо {username}!</h2>
          
        </Container>
    </>
  )
}

export default Cabinet