import type { VideoResponse } from "../types/videos.ts";


const API_URL = "https://api.freeapi.app/api/v1/public/youtube/videos";

export async function getVideos(): Promise<VideoResponse> {
     const response = await fetch(API_URL);

     if(!response.ok){
        throw new Error("Unexpected error while fetching the data");
     }

     const result : VideoResponse = await response.json()
     return result ;
}