import posts from '../data/posts'
import { Link } from 'react-router-dom';

const News = () =>{
  return(
    <ul className="newsList inner">
    {posts.map((elem) => (
      <li className="newsItem">
        <Link to={`/news/${elem.id}`}>
        <div className="newsTop">
          <p className="newsDate">{elem.createdAt.split("T")[0]}</p>
          <div className="newsLabelWrap">
            {elem.categories.map((category) => (
              <p className="newsLabel">{category}</p>
            ))}
          </div>
        </div>
        <h2 className="newsTitle">{elem.title}</h2>
        <p className="newsContent _list">{elem.content}</p>
        </Link>
      </li>
    ))}
  </ul>
  )
}

export default News;
