// VideoSection.jsx
import React, { useEffect, useState } from "react";

export default function VideoSection() {
  const [videos, setVideos] = useState([]);

  // داخل useEffect بدل fetch ضع:
// const mock = [
//   { videoId: "dQw4w9WgXcQ", title: "Test 1", thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" },
//   { videoId: "ysz5S6PUM-U", title: "Test 2", thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg" },
//   { videoId: "jNQXAC9IVRw", title: "Test 3", thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg" }
// ];
// setVideos(mock);
// setLoading(false);

  useEffect(() => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?q=latest&part=snippet&maxResults=9&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // بيانات البحث تُرجع الفيديوهات مع snippet.id.videoId
        const vids = data.items.map((item) => ({
          videoId: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
        }));
        setVideos(vids);
      })
      .catch((err) => console.error("YouTube API error:", err));
  }, []);

  return (
    <section className="relative bg-gray-900 py-16">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          🎬 Latest Videos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.videoId}
              className="relative group overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-full text-white text-3xl hover:scale-110 transition-transform duration-300">
                  ▶
                </div>
              </a>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
