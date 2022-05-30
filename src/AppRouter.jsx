import { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './components'
import { UserContext } from "./context/UserContext";
import { ArticleList, Article, About, CreateArticle, Main, NotFound } from "./pages"

function App() {

  const [user,setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <Router>
        <UserContext.Provider value={value}>
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
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
