function CommentCard(comment) {

    return(
       
            <p>
             Comment ID {comment.comment_id}: {comment.body}
            </p>
      
    )
}

export default CommentCard