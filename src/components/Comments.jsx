import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import CommentCard from './CommentCard'
import AddComment from './AddComment'

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
                               comment={comment}
                               setComments={setComments}
                               article_id={article_id}
                               body={comment.body}
                               comment_id={comment.comment_id}
                               author={comment.author} />
                           </li>
                       )
                   })}
               </ul>
            </div>
            <AddComment setComments={setComments}/>
        
        </section>
    )

}

export default Comments