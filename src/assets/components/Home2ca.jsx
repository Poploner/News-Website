
import { useEffect, useState } from "react";

export default function Home2ca() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?category=business&apiKey=aa754d4982324255903c14860f2150b4"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-[90%] sm:w-[80%] md:w-[50%] lg:w-[30%] bg-white dark:bg-gray-800 rounded-xl mx-auto shadow p-4 ">
      {articles.slice(0, 6).map((item, index) => (
        <div key={index} className="mb-4 border-b border-gray-300 dark:border-gray-700 pb-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {item.urlToImage && (
              <img
                src={item.urlToImage}
                alt={item.title}
                className="w-full sm:w-24 h-40 sm:h-20 object-cover rounded-md"
              />
            )}
            <div className="flex-1">
              <p className="text-xs text-blue-500 font-semibold uppercase">
                {item.source.name}
              </p>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white hover:text-blue-600 line-clamp-2">
                {item.title}
              </h4>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 mt-2 inline-block font-medium hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}





