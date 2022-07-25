import {Link} from 'react-router-dom'

function FilterTopics({setTopic}) {
    return (
        <div>
            <h2>Filter by Topic:</h2>
            <nav>
        <Link to="/articles">All</Link>
        <Link to="/articles/cooking">Cooking</Link>
        <Link to="/articles/football">Football</Link>
        <Link to="/articles/coding">Coding</Link>
      </nav>
        </div>
    )
}

export default FilterTopics