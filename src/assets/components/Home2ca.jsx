import { useEffect, useState } from "react";

export default function Home2ca() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?category=us&apiKey=cceb63c938f24c08bfd3e2917932316e"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-[100%] md:w-[30%] bg-white dark:bg-gray-800 rounded-xl shadow p-4">
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
