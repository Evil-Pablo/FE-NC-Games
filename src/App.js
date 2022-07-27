import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:topic" element={<ArticleList />} />
          <Route path="/article/:article_id" element={<SingleArticle />} />
          <Route path="/article/:article_id/comments" element={<Comments />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
