import { useEffect, useState } from "react";
import Header from "./Header";
export default function Business() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBusinessNews() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=Business&country=us&apiKey=aa754d4982324255903c14860f2150b4`
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBusinessNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-500">
        Loading Business news...
      </div>
    );
  }

  return (
    <div className="px-[100px] bg-gray-50 min-h-screen text-blue">
      <h1 className="text-3xl font-bold mb-6 text-center">Business News</h1>
      {articles.length === 0 ? (
        <p className="text-center text-blue-400">No Business articles available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-purple-500/30 transition duration-300"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full  h-[300px] object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-[#0000ff] text-sm mb-3">
                  {article.description || "No description available."}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0000ff] hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    // </>
  );
}
