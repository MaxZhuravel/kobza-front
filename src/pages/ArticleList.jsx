import { useEffect, useState } from "react";
import { getArticles } from '../REST/articles';
import { ListGroup } from "react-bootstrap";

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


  const articlesMap = articles.map((article) => {
    return <ListGroup.Item><div>Name: {article.name}</div></ListGroup.Item>
  })

  console.log('articles', articles)
  
  return (
    <>
      <h1>Список статей</h1>
      <div>
        <ListGroup variant="flush">{articlesMap}</ListGroup>
      </div>
    </>
  )
}

export default ArticleList;
