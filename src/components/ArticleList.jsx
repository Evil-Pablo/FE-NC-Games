import axios from 'axios'
import {useState, useEffect} from 'react'
import ArticleCard from './ArticleCard'

function ArticleList() {
  const [articles, setArticles] = useState([]); 
   
 function displayArticles() {
     axios.get('https://nc-news-example-1.herokuapp.com/api/articles').then((res)=>{
         setArticles(res.data.articles)
         console.log(res.data.articles,'<<<<ARTICLELIST')
     })
 }
 
    useEffect(()=>{
     displayArticles();
 }, []);

    return (
        <div>
            <section className="articleList">
<h2>Here are the latest articles:</h2>
<ul>
    {articles.map((article)=>{
        return (
            <li key={article.article_id}>
                <ArticleCard 
                article_id={article.article_id}
                title={article.title}
                topic={article.topic}
                author={article.author}
                created_at={article.created_at}
                />
            </li>
        )
    })}
</ul>
            </section>
        </div>
    )
}

export default ArticleList