import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'


function SingleArticle () {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});
    const [vote, setVote] = useState(0);
    const [err, setErr] = useState(null)

    useEffect(()=>{
        axios.get(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}`).then((res)=>{
            setArticle(res.data.article)

    })
    }, []);

    return (
        <section className='singleArticleCard'>
            <h2>Title: {article.title}</h2>
            <h3>Topic: {article.topic}</h3>
            <h3>Author: {article.author}</h3>
            <p>{article.body}</p>
            <h3>Votes: {article.votes+vote}</h3>
            <div className='voteButtons'>
            <button className='vote' onClick={(e)=>{setVote((currentVote)=>currentVote+1)
                axios.patch(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}`,{inc_votes: 1})
                .catch((err)=>{setVote((currentVote)=>currentVote-1)})
                setErr('Sorry, something went wrong. Please vote again.')
                if (err) return <p>{err}</p>;
                
            }}>👍</button>
            <button className='vote' onClick={(e)=>{setVote((currentVote)=>currentVote-1)
                axios.patch(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}`,{inc_votes: 1})
                .catch((err)=>{setVote((currentVote)=>currentVote+1)})
                setErr('Sorry, something went wrong. Please vote again.')
                if (err) return <p>{err}</p>;
                
            }}>👎</button>
            </div>
        </section>
    )
}

export default SingleArticle

