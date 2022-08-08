// import axios from "axios";
// import { GetServerSideProps } from "next";
// import { FC } from "react";
// import MainContainer from "../../component/MainContainer";
// import { useAppSelector } from "../../hooks/useAppSelector";
// import { INewsState } from "../../types/NewsTypes";

// const NewsPage: FC = () => {
//   const { news, error } = useAppSelector((state) => state.getnews);

//   return (
//     <div>
//       <MainContainer title={news.title}>
//         <div className="boxcontent">
//           <div className="newscontent">
//             <h1>{news.title}</h1>
//             <a href={news.url}>{news.name}</a>
//             <span>Reported by: {news.author}</span>
//             <img className="newsphoto" src={news.urlToImage} alt="img" />
//             <span>{news.description}</span>
//           </div>
//         </div>
//       </MainContainer>
//     </div>
//   );
// };
// export default NewsPage;
