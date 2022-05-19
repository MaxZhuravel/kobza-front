import { useEffect, useState } from "react";
import { getArticles } from '../REST/articles';

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
    return <div>Name: {article.name}</div>
  })

  console.log('articles', articles)
  
  return (
    <>
      <h1>Список статей</h1>
      <div>
        {articlesMap}
      </div>
    </>
  )
}

export default ArticleList;
