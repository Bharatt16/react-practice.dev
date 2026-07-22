export interface Video {
  kind: string;
  items: {
    kind: string;
    id: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      channelTitle: string;
      categoryId: string;
      defaultAudioLanguage?: string;
      tags?: string[];
      thumbnails: {
        default: {
          url: string;
        };
        medium: {
          url: string;
        };
        high: {
          url: string;
        };
        standard?: {
          url: string;
        };
        maxres?: {
          url: string;
        };
      };
    };
    contentDetails: {
      duration: string;
      dimension: string;
      definition: string;
      caption: string;
      projection: string;
    };
    statistics: {
      viewCount: string;
      likeCount: string;
      favoriteCount: string;
      commentCount: string;
    };
  };
}

export interface VideoResponse {
  statusCode: number;
  data: {
    page: number;
    limit: number;
    totalPages: number;
    previousPage: boolean;
    nextPage: boolean;
    totalItems: number;
    currentPageItems: number;
    data: Video[];
  };
}