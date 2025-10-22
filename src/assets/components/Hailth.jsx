
import { useEffect, useState } from "react";

export default function Hailth() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHealthNews() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=Health&country=us&apiKey=70b525d261a74a90a2a95c8fbe5c6eb2`
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchHealthNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-500">
        Loading Business news...
      </div>
    );
  }

  return (
    <div className="px-[100px]  min-h-screen text-blue">
      <h1 className="text-3xl font-bold m-[60px] text-center text-[#0000ff] hover:underline">Health News</h1>
      {articles.length === 0 ? (
        <p className="text-center text-blue-400">No Business articles available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {articles.map((article, index) => (
            <div
              key={index}
              className=" rounded-xl shadow-lg overflow-hidden hover:shadow-sm transition duration-300"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-[50%] object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-md text-[#0000ff]  font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-400 text-sm mb-3">
                  {article.description || "No description available."}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-6 text-[#0000ff] hover:underline "
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}