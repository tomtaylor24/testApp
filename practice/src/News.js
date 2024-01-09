import "./news.css";

function News({ src }) {
  return (
    <ul className="newsList">
      {src.map((elem) => (
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
  );
}

// function News() {
//   return(
//     <ul className='newsList'>
//       <li className='newsItem'>
//         <div className='newsTop'>
//           <p className='newsDate'>20230101</p>
//           <div className='newsLabelWrap'>
//             <p className='newsLabel'>aaa</p>
//             <p className='newsLabel'>vvv</p>
//           </div>
//         </div>
//         <h2 className='newsTitle'>aaaaa</h2>
//         <p className='newsText'>aaaa</p>
//       </li>
//       <li className='newsItem'>
//         <div className='newsTop'>
//           <p className='newsDate'></p>
//           <div className='newsLabelWrap'>
//             <p className='newsLabel'></p>
//             <p className='newsLabel'></p>
//           </div>
//         </div>
//         <h2 className='newsTitle'></h2>
//         <p className='newsText'></p>
//       </li>
//     </ul>
//   );
// }

export default News;
