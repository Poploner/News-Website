import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer"
export default function Politics () {

    // const savedNews = JSON.parse(localStorage.getItem("politicsNews")) || []
      const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPoliticsNews() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=politics&country=us&apiKey=aa754d4982324255903c14860f2150b4`
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPoliticsNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-500">
        Loading Politics news...
      </div>
    );
  }
    return(
        <>
                
                <div className="px-[100px] bg-gray-50 min-h-screen text-blue py-10">
                  {articles.length === 0 ? (
                    <p className="text-center text-blue-400">No Politics News available.</p>
                  ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                      {articles.map((article, index) => (
                        <div
                          key={index}
                          className="bg-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
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
                
               </>
    )
}