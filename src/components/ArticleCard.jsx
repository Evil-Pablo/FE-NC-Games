import {Link} from 'react-router-dom'

function ArticleCard(article) {

    return (
        <div className='articleCard'>
            <nav>
          <Link to={`/article/${article.article_id}`}>
          <h2>{article.title}</h2>
          </Link>  
            </nav>
            <h3>Topic: {article.topic}</h3>
            <h3>Author: {article.author}</h3>
           
        </div>
    )
}

export default ArticleCard