import { useEffect, useState } from "react";

export default function Home2ca () {

    const [articles, setArticles] = useState([]);
    
      useEffect(() => {
        fetch(
          "https://newsapi.org/v2/top-headlines?category=country=&apiKey=70b525d261a74a90a2a95c8fbe5c6eb2"
          )
          .then((res) => res.json())
          .then((data) => setArticles(data.articles))
          .catch((err) => console.error(err));
      }, []);
    
    return (
        <>
              <div className="grid md:grid-cols-1 gap-6 right w-[30%] p-6">
        {articles.map((item, index) => (
          <div
            key={index}
            className=" overflow-hidden mb-[20px] transition-all duration-300 "
          >
            {item.urlToImage && (
              <img
                src={item.urlToImage}
                alt={item.title}
                className="w-[30%] h-[100px] object-cover float-left mr-[10px]"
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
              <hr className="text-gray-300 mt-[10px]"/>
            </div>
          </div>
        ))}
      </div>
        
         </>
    )
    }