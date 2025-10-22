// import React, { useEffect, useState } from "react";
// import Home2ca from "./Home2ca";
import React, { useEffect, useState } from "react";
import Home2ca from "./Home2ca";

export default function HomeCard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?category=nature&country=us&apiKey=cceb63c938f24c08bfd3e2917932316e"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="w-full md:w-[70%] grid sm:grid-cols-2 gap-6">
        {articles?.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all overflow-hidden"
          >
            {item.urlToImage && (
              <img
                src={item.urlToImage}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-4">
              <p className="text-blue-600 font-semibold uppercase text-xs mb-1">
                {item.source.name}
              </p>
              <h2 className="font-bold text-lg text-gray-900 dark:text-white hover:text-blue-600 transition-all line-clamp-2">
                {item.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-3">
                {item.description || "No description available."}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 mt-3 inline-block font-medium hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
      <Home2ca />
    </>
  );
}

