import posts from '../data/posts'

const News =  ({props}) =>{
  return(
    <ul className="newsList">
    {posts.map((elem) => (
      <li className="newsItem">
        <a href="">
        <div className="newsTop">
          <p className="newsDate">{elem.createdAt.split("T")[0]}</p>
          <div className="newsLabelWrap">
            {elem.categories.map((category) => (
              <p className="newsLabel">{category}</p>
            ))}
          </div>
        </div>
        <h2 className="newsTitle">{elem.title}</h2>
        <p className="newsContent">{elem.content}</p>
        </a>
      </li>
    ))}
  </ul>
  )
}

export default News;
