import type { JokeApiResponse } from "../types/joke.ts";

const API_URL = 'https://api.freeapi.app/api/v1/public/randomjokes'

export async function getRandomJokes() : Promise<JokeApiResponse>{ 
     const response = await fetch(API_URL);
     console.log(response)

     if(!response.ok){
        throw new Error("Failed to fetch the joke");
     }

     const result : JokeApiResponse = await response.json();
     return result
}