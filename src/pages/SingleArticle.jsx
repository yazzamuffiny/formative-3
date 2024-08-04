import { useParams } from "react-router-dom"
import { useArticlesContext } from "../hooks/useArticlesContext"
import { format } from "date-fns"

const SingleArticle = () => {
    const {id} = useParams()
    //bring in the context (global state)
    const {articles} = useArticlesContext()

    const article = articles[id]
    const formattedDate = format(new Date(article.publishedAt), "h:mmbbb dd/MMM/yyyy")

  return (
    <div className="single-article">
        <img src={article.urlToImage} alt={article.title + " Image"} />
        <h2 className="single-header">{article.title}</h2>
        <h3 className="date">{formattedDate}</h3>
        <p className="author"> {article.author} </p>
        <p className="description">{article.description}</p>
        <p className="content">{article.content}</p>
        <a href={article.url} target="_blank" className="full-article">See full article</a>
    </div>
  )
}

export default SingleArticle
