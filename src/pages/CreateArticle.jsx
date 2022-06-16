import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { postArticle } from '../REST/articles';

const CreateArticle = () => {

  const [title,setTitle]=useState("");
  const [body,setBody]=useState("");

  async function createArticle(e){
    e.preventDefault();
    await postArticle(title,body);
  }

  return (


    <>
      <h1>Створення статті</h1>
      <Form onSubmit={(e)=>createArticle(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Назва статті</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Введіть назву" 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBody">
          <Form.Label>Стаття</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={12}
            value={body}
            onChange={(e)=>setBody(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Створити</Button>
      </Form>
    </>
  )
}

export default CreateArticle;
