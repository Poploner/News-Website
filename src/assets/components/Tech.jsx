import { useEffect, useState } from "react"

export default function Tech() {
  const savedNews = JSON.parse(localStorage.getItem("techNews")) || []
  const [techNews, setTechNews] = useState(savedNews)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?category=technology&apiKey=70b525d261a74a90a2a95c8fbe5c6eb2"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.articles) {
          setTechNews(data.articles)
          localStorage.setItem("techNews", JSON.stringify(data.articles))
        }
      })
      .catch((err) => console.error("Error fetching news:", err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="news-content">
      {loading ? (
        <p>Loading technology news...</p>
      ) : techNews.length > 0 ? (
        techNews.map((item, index) => (
          <div key={index} className="news-card">
            <div className="news-image">
              <img src={item.urlToImage || "/placeholder.jpg"} alt={item.title} />
            </div>
            <div className="news-text">
              <h4 className="category-tag">Tech News</h4>
              <h2 className="news-title">{item.title}</h2>
              <p className="news-description">{item.description}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>No news articles found.</p>
      )}
    </div>
  )
}

