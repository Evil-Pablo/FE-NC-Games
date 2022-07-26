import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'


function SingleArticle () {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});
    const articleCopy = article
    console.log(articleCopy,'<<<<Single Article')

    function displayArticle() {

    }

    useEffect(()=>{
        axios.get(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}`).then((res)=>{
            setArticle(res.data.article)

    })
    }, [article_id]);

    return (
        <div className='singleArticleCard'>
            <h2>Title: {article.title}</h2>
            <h3>Topic: {article.topic}</h3>
            <h3>Author: {article.author}</h3>
            <p>{article.body}</p>
            <h3>Vote: {article.votes}</h3><button onClick={(e)=>{
                axios.patch(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}`,{votes: 1}).then(

                )
            }}>Vote</button>
        </div>
    )
}

export default SingleArticle