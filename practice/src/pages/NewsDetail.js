import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import posts from "../data/posts";

const NewsDetail = () => {
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const data = await res.json();
      setNewsData(data.post);
      setIsLoading(false);
    };
    fetcher();
  }, [id]);
  if (isLoading) {
    return <div>読み込み中…</div>;
  }
  if (!newsData) {
    return <div>記事が見つかりません</div>;
  }

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
