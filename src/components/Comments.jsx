import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import CommentCard from './CommentCard'

function Comments ({article, setArticle}) {
    const {article_id} = useParams()
    const [comments, setComments] = useState([])
    
    useEffect(()=>{
        axios.get(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}/comments`)
        .then((res)=>{
            setComments(res.data.comments)
    })
    }, []);

    useEffect(()=>{
        axios.get(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}`)
        .then((res)=>{
            setArticle(res.data.article)
    })
    }, []);
    

    return (
        <section className="singleArticleCard">
            <h2>Title: {article.title}</h2>
            <h3>Author: {article.author}</h3>
           <div>
               <ul>
                   
                       <h2>Comments:</h2>
                   
                   {comments.map((comment)=>{
                       return (
                           <li
                           className='comment'
                           key={comment.comment_id}>
                               <CommentCard
                               body={comment.body}
                               comment_id={comment.comment_id} />
                           </li>
                       )
                   })}
               </ul>
           </div>
         
        </section>
    )

}

export default Comments