import axios from "axios";
import { useParams } from "react-router-dom";
import {useState} from 'react'

function AddComment({setComments}) {
    const {article_id} = useParams()
    const [comment, setComment] = useState("")
    const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}/comments`, {
            body: comment,
            username: username
        })
        .then(()=>{
            setComment("");
            setUsername("");
            axios.get(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}/comments`).then((res)=>setComments(res.data.comments))
        })
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>Add Comment:</label>
        <input 
        className='textInput' 
        type="text" 
        value={comment}
        onChange={(e) => {
            setComment(e.target.value)
        }}/>
        <label>Username:</label>
        <input 
        type="text"
        value={username}
        onChange={(e) => {
            setUsername(e.target.value)
        }} />
        <button type="submit">Submit</button>
    </form>
    )
}

export default AddComment

<a href=""></a>