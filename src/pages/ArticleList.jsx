import { useEffect, useState } from "react";
import { getArticles } from '../REST/articles';
import { ListGroup, InputGroup, FormControl, Button } from "react-bootstrap";
import { ListItem } from "../components";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadArticles()
  }, []);

  function loadArticles() {
    try {
      getArticles().then((data) => setArticles(data?.data))
    } catch (error) {
      console.log('Load Articles error:', error)
    }
  }
  console.log(articles);

  const articlesMap = articles.filter(
    article=>article?.attributes?.Title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  ).map((article,index) => {
    console.log(article);
    return <ListItem key={article?.id} index = {index+1} id={article?.id} Title={article?.attributes?.Title}></ListItem>
  })

  
  return (
    <>
      <InputGroup className="mb-3 mt-3">
        <FormControl
          placeholder="Пошук"
          aria-label="Пошук"
          aria-describedby="basic-addon2"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
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
