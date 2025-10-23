import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer"



export default function Sports() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSportsNews() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=sport&country=us&apiKey=aa754d4982324255903c14860f2150b4`
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
            <Header />
            <div className="px-[100px] bg-gray-50 min-h-screen text-blue py-10">
      {articles.length === 0 ? (
        <p className="text-center text-blue-400">No Sport articles available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-xl shadow-lg overflow-hidden hover:scale-102 hover:shadow-lg transition duration-300"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-[300px] object-cover" />
              )}
              <div className="p-4">
                <h2 className="text-xl text-[#0000ff] font-semibold mb-2">{article.title}</h2>
                <p className="text-gray text-sm mb-3">
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
            <Footer />
            </>
  );
}
