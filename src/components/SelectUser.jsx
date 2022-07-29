import axios from "axios";
import {useContext, useEffect, useState} from 'react'
import {UserContext} from '../User'

function SelectUser() {
const [users, setUsers] = useState([])
const {user, setUser} = useContext(UserContext)

console.log(user,'user')

useEffect(() => {
    axios.get(`https://nc-news-example-1.herokuapp.com/api/users/tickle122`)
   .then((userFromApi) => {
        setUsers(userFromApi.data.user)
    })
}, [])

return (
    <section>
        <h2>Choose a user:</h2>
        <ul>
                    <li>
                        <h3>{users.username}</h3>
                        <img src={users.avatar_url} alt={users.username} />
                        <p>{users.name}</p>
                        <button onClick={()=>{setUser(users)}}>select</button>
                    </li>
                
            
        </ul>
    </section>
)

}

export default SelectUser