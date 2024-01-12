import { useParams } from "react-router-dom";
import posts from "../data/posts";

const NewsDetail = () => {
  const { id } = useParams();
  const newsData = posts.find((post) => post.id.toString() === id);
  return (
    <div className="newsDetail inner">
      <img src={newsData.thumbnailUrl} />
      <div className="newsInner">
        <div className="newsTop">
          <p className="newsDate">{newsData.createdAt.split("T")[0]}</p>
          <div className="newsLabelWrap">
            {newsData.categories.map((category) => (
              <p className="newsLabel">{category}</p>
            ))}
          </div>
        </div>
        <h2 className="newsTitle">{newsData.title}</h2>
        <p
          className="newsContent"
          dangerouslySetInnerHTML={{ __html: newsData.content }}
        />
      </div>
    </div>
  );
};

export default NewsDetail;
