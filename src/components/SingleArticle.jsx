import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'


function SingleArticle () {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});

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
            <h3>Created: {article.created_at}</h3>
        </div>
    )
}

export default SingleArticle