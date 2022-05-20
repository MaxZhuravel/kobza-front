import { useEffect, useState } from "react";
import { getArticles } from '../REST/articles';
import { ListGroup, InputGroup, FormControl, Button } from "react-bootstrap";
import { ListItem } from "../components";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadArticles()
  }, []);

  function loadArticles() {
    try {
      getArticles().then((data) => setArticles(data?.results))
    } catch (error) {
      console.log('Load Articles error:', error)
    }
  }

  const articlesMap = articles.map((article,index) => {
    article.id=index+1;
    console.log(article);
    return <ListItem key={article.name} article={article} id={article.id}></ListItem>
  })

  {/*console.log('articles', articles)*/}
  
  return (
    <>
      <InputGroup className="mb-3 mt-3">
        <FormControl
          placeholder="Пошук"
          aria-label="Пошук"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Пошук
        </Button>
      </InputGroup>
      <h1>Список статей</h1>
      <div>
        <ListGroup variant="flush">{articlesMap}</ListGroup>
      </div>
    </>
  )
}

export default ArticleList;
