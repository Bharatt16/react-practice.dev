import type { Video } from "../types/videos";

interface VideoCardProps {
  video: Video;
}

function VideoCard({ video }: VideoCardProps) {
  const { snippet, statistics, contentDetails, id } = video.items;

  return (
    <div className="video-card">
      <img
        src={snippet.thumbnails.high.url}
        alt={snippet.title}
        className="thumbnail"
      />

      <div className="video-info">
        <h2>{snippet.title}</h2>

        <p className="channel">{snippet.channelTitle}</p>

        <p className="description">
          {snippet.description.length > 120
            ? snippet.description.slice(0, 120) + "..."
            : snippet.description}
        </p>

        <div className="stats">
          <span>👀 {statistics.viewCount}</span>
          <span>👍 {statistics.likeCount}</span>
          <span>💬 {statistics.commentCount}</span>
        </div>

        <p className="duration">
          ⏱ {contentDetails.duration}
        </p>

        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="watch-btn"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}

export default VideoCard;