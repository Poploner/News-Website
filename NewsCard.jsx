import React, { useEffect, useState } from "react";
export default function NewsCard(){

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error(err));
  }, []);

}

//   useEffect(() => {
//     fetch(
//       "https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY"
//     )
//       .then((res) => res.json())
//       .then((data) => setArticles(data.articles))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <section className="bg-white dark:bg-gray-900 min-h-screen p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">📰 News Today</h1>

    //   <div className="grid md:grid-cols-3 gap-6">
    //     {articles.map((item, index) => (
    //       <div
    //         key={index}
    //         className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
    //       >
    //         {item.urlToImage && (
    //           <img
    //             src={item.urlToImage}
    //             alt={item.title}
    //             className="w-full h-48 object-cover"
    //           />
    //         )}
    //         <div className="p-4">
    //           <p className="text-red-600 font-semibold uppercase text-sm">
    //             {item.source.name}
    //           </p>
    //           <h2 className="font-bold text-lg mb-2">{item.title}</h2>
    //           <p className="text-gray-600 dark:text-gray-300 text-sm">
    //             {item.description || "No description available."}
    //           </p>
    //           <a
    //             href={item.url}
    //             target="_blank"
    //             className="text-blue-600 mt-3 inline-block font-medium hover:underline"
    //           >
    //             Read more →
    //           </a>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
//     </section>
//   );
// }
//     // return(
//     // <>
//     //  <div className="flex gap-[20px] pt-[40px] bg-blue-600 dark:bg-gray-100 w-[100%] px-[150px]">
//     //     <div className="flex">
        
//     //     </div>
//     //     <div>

//     //     </div>
//     //  </div>
//     // </>
//     // )
