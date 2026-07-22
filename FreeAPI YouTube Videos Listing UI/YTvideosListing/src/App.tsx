import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import VideoCard from "./components/VideoCard";
import { getVideos } from "./services/videosService";
import type { Video } from "./types/videos";

function App() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getVideos();

      setVideos(response.data.data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">🎥 YouTube Videos</h1>

      {loading && <Loader />}

      {!loading && error && (
        <ErrorMessage message={error} />
      )}

      {!loading && !error && (
        <div className="video-grid">
          {videos.map((video) => (
            <VideoCard
              key={video.items.id}
              video={video}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;