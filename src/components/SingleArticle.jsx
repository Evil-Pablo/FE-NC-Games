import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'


function SingleArticle () {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});

    useEffect(()=>{
        axios.get(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}`).then((res)=>{
            console.log(res, '<<<single article')
            setArticle(res.data.article)

    })
    }, [article_id]);

    return (
        <div>
            <h2>{article.title}</h2>
            <h3>{article.topic}</h3>
            <h3>{article.author}</h3>
            <h3>{article.created_at}</h3>
        </div>
    )
}

export default SingleArticle