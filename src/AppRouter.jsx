import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './components'
import { ArticleList, Article, About, CreateArticle, Main, NotFound } from "./pages"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/articles" element={<ArticleList/>}/>
            <Route path="/articles/:id" element={<Article/>}/>
            <Route path="/articles/create-article" element={<CreateArticle/>}/>
            <Route path="/about" element={<About/>}/>
            <Route exect path="/" element={<Main/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
