import axios from 'axios'
import {useState, useEffect} from 'react'
import ArticleCard from './ArticleCard'
import FilterTopics from './FilterTopics';
import {useParams} from 'react-router-dom'

function ArticleList() {
  const [articles, setArticles] = useState([]); 

  const {topic} = useParams();
   
 function displayArticles() {
     let API_string = 'https://nc-news-example-1.herokuapp.com/api/articles';
     if (topic) {
         API_string += `?topic=${topic}`;
     }
     
     axios.get(API_string).then((res)=>{
         setArticles(res.data.articles)
     })
 }
 
    useEffect(()=>{
     displayArticles();
 }, [topic]);

    return (
        <div>
            <section className="articleList">
                <FilterTopics />
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
                votes={article.votes}
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