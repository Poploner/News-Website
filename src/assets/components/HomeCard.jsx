import React, { useEffect, useState } from "react";
import Home2ca from "./Home2ca";
export default function HomeCard(){
   const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
     "https://newsapi.org/v2/top-headlines?category=technology&apiKey=70b525d261a74a90a2a95c8fbe5c6eb2"
      )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
    <section className="bg-white dark:bg-gray-900 min-h-screen px-[150px] flex gap-6">
      <div className="grid md:grid-cols-2 gap-[40px] p-4 left w-[100%] h-[50%]">
        {articles.map((item, index) => (
          <div
            key={index}
            className=" overflow-hidden transition-all duration-300 "
          >
            {item.urlToImage && (
              <img
                src={item.urlToImage}
                alt={item.title}
                className="w-full h-48 object-cover mb-4"
              />
            )}
            <div className="">
              <p className="text-black dark:text-white font-semibold uppercase text-sm">
                {item.source.name}
              </p>
              <h2 className="font-bold text-lg mb-2 text-blue-600">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.description || "No description available."}
              </p>
              <a
                href={item.url}
                target="_blank"
                className="text-blue-600 mt-3 inline-block font-medium hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>


    </section>
    </>
  )

}

