import Footer from "./Footer"
import Header from "./Header";
import { useEffect, useState } from "react";

export default function Hailth() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHealthNews() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=Health&country=us&apiKey=cceb63c938f24c08bfd3e2917932316e`
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
        Loading Health news...
      </div>
    );
  }

  return (
    <>
    <Header/>
    <div className="px-[100px]  min-h-screen text-blue py-10 dark:bg-gray-900">
      {articles.length === 0 ? (
        <p className="text-center text-blue-400">No Business articles available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300  dark:bg-gray-800"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-[300px] object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-md text-[#0000ff]  dark:text-white font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-400 text-sm mb-3">
                  {article.description || "No description available."}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-6 text-[#0000ff] dark:text-blue-600 hover:underline "
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}