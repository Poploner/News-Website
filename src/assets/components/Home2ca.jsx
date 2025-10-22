import { useEffect, useState } from "react";

export default function Home2ca() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?category=business&apiKey=cceb63c938f24c08bfd3e2917932316e"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-[100%] md:w-[30%] bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      {/* <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-4 border-b pb-2">
        Latest News
      </h3> */}
      {articles.slice(0, 6).map((item, index) => (
        <div key={index} className="mb-4 border-b pb-3">
          <div className="flex items-start gap-3">
            {item.urlToImage && (
              <img
                src={item.urlToImage}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md"
              />
            )}
            <div>
              <p className="text-xs text-blue-500 font-semibold uppercase">
                {item.source.name}
              </p>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white hover:text-blue-600 line-clamp-2">
                {item.title}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}





// import { useEffect, useState } from "react";

// export default function Home2ca () {

//     const [articles, setArticles] = useState([]);
    
//       useEffect(() => {
//         fetch(
//           "https://newsapi.org/v2/top-headlines?category=country=&apiKey=cceb63c938f24c08bfd3e2917932316e"
//           )
//           .then((res) => res.json())
//           .then((data) => setArticles(data.articles))
//           .catch((err) => console.error(err));
//       }, []);
    
//     return (
//         <>
//               <div className="grid md:grid-cols-1 gap-6 right w-[30%] p-6">
//         {articles.map((item, index) => (
//           <div
//             key={index}
//             className=" overflow-hidden mb-[20px] transition-all duration-300 "
//           >
//             {item.urlToImage && (
//               <img
//                 src={item.urlToImage}
//                 alt={item.title}
//                 className="w-[30%] h-[100px] object-cover float-left mr-[10px]"
//               />
//             )}
//             <div className="">
//               <p className="text-black dark:text-white font-semibold uppercase text-sm">
//                 {item.source.name}
//               </p>
//               <h2 className="font-bold text-lg mb-2 text-blue-600">{item.title}</h2>
//               <p className="text-gray-600 dark:text-gray-300 text-sm">
//                 {item.description || "No description available."}
//               </p>
//               <a
//                 href={item.url}
//                 target="_blank"
//                 className="text-blue-600 mt-3 inline-block font-medium hover:underline"
//               >
//                 Read more →
//               </a>
//               <hr className="text-gray-300 mt-[10px]"/>
//             </div>
//           </div>
//         ))}
//       </div>
        
//          </>
//     )
//     }