import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './components'
import { ArticleList, Article, About, CreateArticle, Main, Invitation, NotFound } from "./pages"

import RequireAuth from "./hoc/RequireAuth";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/articles" element={<ArticleList/>}/>
            <Route path="/articles/:id" element={<Article/>}/>
            <Route path="/articles/create-article" element={
              <RequireAuth>
                <CreateArticle/>
              </RequireAuth>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/invitation" element={<Invitation/>}/>
            <Route exect path="/" element={<Main/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
