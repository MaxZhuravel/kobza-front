import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneArticle } from '../REST/articles';

const Article = () => {

  const [article,setArticle] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    loadOneArticle()
  }, [id]);

  function loadOneArticle() {
    try {
      getOneArticle(id).then((data) => setArticle(data?.data))
    } catch (error) {
      console.log('Load Article error:', error)
    }
  }

  return (
    <>
      <h1>{article?.attributes?.Title}</h1>
      <div>{article?.attributes?.Body}</div>
    </>
  )
}

export default Article;
