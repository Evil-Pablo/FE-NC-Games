import axios from 'axios'
import {useParams} from 'react-router-dom'


function CommentCard(comment,{setComments}) {
    const {article_id} = useParams()
    console.log(comment.comment_id)
    console.log(article_id,'article ID')
    console.log(setComments)
   
return(
       
            <div>

            <p>
             Username: {comment.author}
             <br />
             <br />
             {comment.body}
            </p>
            <button className='deleteComment' onClick={(e)=>{
                console.log(comment.comment_id)
                axios
                    .delete(`'https://nc-news-example-1.herokuapp.com/api/comments'${comment.comment_id}`)
                    .then(axios.get(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}/comments`).then((res)=>setComments(res.data.comments)))
                    .catch(()=>console.log(comment.comment_id,'catch'))

            }}>delete</button>
      
            </div>
    )
}

export default CommentCard