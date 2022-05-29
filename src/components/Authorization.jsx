import React from 'react'
import { Button } from 'react-bootstrap'

const Authorization = ({handleStateLogIn,handleStateSignUp}) => {
  return (
    <>
        <Button variant="primary" className="me-2" onClick={handleStateLogIn}>Увійти</Button>
        <Button variant="primary" onClick={handleStateSignUp}>Зареєструватись</Button>
    </>
  )
}

export default Authorization