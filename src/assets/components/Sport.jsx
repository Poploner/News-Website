import { useEffect, useState } from "react";

export default function Sports() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSportsNews() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=70b525d261a74a90a2a95c8fbe5c6eb2`
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSportsNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-500">
        Loading sports news...
      </div>
    );
  }

  return (
   <div className="p-8 bg-[#f9fafb] min-h-screen" >
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800 dark:text-blue-400">
        Sports News
      </h1>

      <div className="space-y-6 max-w-5xl mx-auto">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-sm flex flex-col md:flex-row overflow-hidden border border-gray-200 dark:border-red-800 hover:shadow-md transition"
          >
            {/* IMAGE SECTION */}
            {article.urlToImage && (
              <div className="md:w-1/2">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
            )}

            {/* TEXT SECTION */}
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <span className="text-blue-500 text-sm font-semibold mb-2">
                Sports News
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-blue-800 dark:text-blue-400 mb-3">
                {article.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                {article.description || "No description available."}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
