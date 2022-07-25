import {Link} from 'react-router-dom'
import SingleArticle from './SingleArticle'

function ArticleCard(article) {
    return (
        <div className='articleCard'>
            <Link to={`/articles/${article.article_id}`}>
            <h2>{article.title}</h2>
            </Link>
            <h3>Topic: {article.topic}</h3>
            <h3>Author: {article.author}</h3>
        </div>
    )
}

export default ArticleCard