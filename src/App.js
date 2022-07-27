import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";

function App() {
  const [article, setArticle] = useState({});

  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:topic" element={<ArticleList />} />
          <Route
            path="/article/:article_id"
            element={
              <SingleArticle article={article} setArticle={setArticle} />
            }
          />
          <Route
            path="/comments/:article_id"
            element={<Comments article={article} setArticle={setArticle} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
