import { useEffect, useState } from "react";
import { getArticles } from '../REST/articles';
import { getAuth } from '../REST/authorization';
import { ListGroup} from "react-bootstrap";
import { ListItem } from "../components";
import SearchForm from "../components/SearchForm";

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

  const articlesMap = articles.filter(
    article=>article?.attributes?.Title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  ).map((article) => {
    return <ListItem key={article?.id} id={article?.id} Title={article?.attributes?.Title}></ListItem>
  })

  
  return (
    <>
      <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <h1>Список статей</h1>
      <div>
        <ListGroup variant="flush">{articlesMap}</ListGroup>
      </div>
    </>
  )
}

export default ArticleList;
