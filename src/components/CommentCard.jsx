import axios from 'axios'

function CommentCard({comment,setComments}) {
   
    const handleClick = () => {
        axios
        .delete(`https://nc-news-example-1.herokuapp.com/api/comments/${comment.comment_id}`)
        .then(() => {
            setComments((prevComments) => {
                console.log(prevComments)
                return prevComments.filter((comm)=>{
                    return comm.comment_id !== comment.comment_id
            })
        })
    }
    )
}

return(
       
            <div>
            <p>
             Username: {comment.author}
             <br />
             <br />
             {comment.body}
            </p>
            <button className='deleteComment' onClick={handleClick}>delete</button>     
            </div>
    )
}

export default CommentCard