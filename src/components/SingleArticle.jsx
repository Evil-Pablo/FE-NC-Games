import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'



function SingleArticle () {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});
    const [vote, setVote] = useState(0);
    const [err, setErr] = useState(null)
    const [level, setLevel] = useState(1)
    const [count, setCount] = useState(0)

    const voteHandler = (e) => {
        let incVote = 1
        if (e.target.id === 'down') incVote = -1;
        setLevel(0)
        setCount((currentCount)=>incVote)
        setVote((currentVote)=>currentVote+incVote)
            axios.patch(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}`,{inc_votes: incVote})
            .catch((err)=>{setVote((currentVote)=>currentVote-incVote)})
            setErr('Sorry, something went wrong. Please vote again.')
            if (err) return <p>{err}</p>;    
    }

    const resetVote = (e) => {
        
        setLevel(1)
        setVote((currentVote)=>currentVote-count)
        axios.patch(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}`,{inc_votes: -count})
            .catch((err)=>{setVote((currentVote)=>currentVote+count)})
            setErr('Sorry, something went wrong. Please vote again.')
            if (err) return <p>{err}</p>;    


    }


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
            <Link to={`/article/${article.article_id}/comments`}>
            <h3>Comments: {article.comment_count}</h3>
            </Link>
            <h3>Votes: {article.votes+vote}</h3>
            <div className='voteButtons'>
            <button 
            id='up'
            level={level}
            count={count}
            disabled={level !== 1}
            className='vote' 
            onClick={voteHandler}>
            👍</button>
            <button id='reset'
            level={1}
            onClick={resetVote}
            disabled={level !== 0}>
            Reset Vote</button>
            <button 
            id='down' 
            level={level}
            count={count}
            disabled={level !== 1} 
            className='vote' 
            onClick={voteHandler}>
            👎</button>
            </div>
        </section>
    )
}

export default SingleArticle

