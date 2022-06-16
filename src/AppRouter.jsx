import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './components'
import { Cabinet, ArticleList, ConversationList, EssayList, ReviewList, Article, Conversation, Essay, Review, About, CreateArticle, Main, Invitation, NotFound } from "./pages"

import RequireAuth from "./hoc/RequireAuth";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/articles" element={<ArticleList/>}/>
            <Route path="/conversations" element={<ConversationList/>}/>
            <Route path="/essays" element={<EssayList/>}/>
            <Route path="/reviews" element={<ReviewList/>}/>
            <Route path="/articles/:id" element={<Article/>}/>
            <Route path="/conversations/:id" element={<Conversation/>}/>
            <Route path="/essays/:id" element={<Essay/>}/>
            <Route path="/reviews/:id" element={<Review/>}/>
            <Route path="/articles/create-article" element={
              <RequireAuth>
                <CreateArticle/>
              </RequireAuth>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/invitation" element={<Invitation/>}/>
            <Route path="/cabinet" element={<Cabinet/>}/>
            <Route exect path="/" element={<Main/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
