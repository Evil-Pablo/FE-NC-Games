function CommentCard(comment) {

    return(
       
            <p>
             Username: {comment.author}
             <br />
             <br />
             {comment.body}
            </p>
      
    )
}

export default CommentCard