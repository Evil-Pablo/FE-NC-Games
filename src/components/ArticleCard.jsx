function ArticleCard(article) {
    return (
        <div className='articleCard'>
<h2>{article.title}</h2>
<h3>Topic: {article.topic}</h3>
<h3>Author: {article.author}</h3>
        </div>
    )
}

export default ArticleCard