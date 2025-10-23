import { useEffect, useState } from "react";




export default function Sports() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSportsNews() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=sport&country=us&apiKey=70b525d261a74a90a2a95c8fbe5c6eb2`
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
        Loading Sports news...
      </div>
    );
  }

  return (
            <>
            
            <div className=" px-4 sm:px-8 md:px12 lg:px-[100px]  min-h-screen text-blue py-10 dark:bg-gray-900">
      {articles.length === 0 ? (
        <p className="text-center text-blue-400">No Sport articles available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6  ">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-xl shadow-lg overflow-hidden hover:scale-102 hover:shadow-lg  dark:bg-gray-800 transition duration-300"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full  h-[300px] sm:h-[200px] lg:h-[200px] object-cover text-white" />
              )}
              <div className="p-4">
                <h2 className="text-lg  sm:text-xl font-semibold  mb-2 dark:text-white">{article.title}</h2>
                <p className="text-sm sm:text-base text-[#0000ff] dark:text-gray-400 text-sm mb-3">
                  {article.description || "No description available."}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0000ff] dark:text-blue-600 hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
            
            </>
  );
}
