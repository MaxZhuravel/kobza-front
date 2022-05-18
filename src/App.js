import React, {useState} from "react";
import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Layout } from "./components/Layout";
import { ArticleList } from "./pages/ArticleList"
import { Article } from "./pages/Article";
import { About } from "./pages/About";
import { CreateArticle } from "./pages/CreateArticle";
import { Main } from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="/articles" element={<ArticleList/>}/>
          <Route path="/articles/:id" element={<Article/>}/>
          <Route path="/articles/create-article" element={<CreateArticle/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
