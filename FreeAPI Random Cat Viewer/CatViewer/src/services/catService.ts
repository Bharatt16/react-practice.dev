import type { CatResponse } from "../types/cat.ts";


const API_URL = "https://api.freeapi.app/api/v1/public/cats/cat/random";

export async function getRandomCat(): Promise<CatResponse> {
     const response = await fetch(API_URL);

     if(!response.ok){
        throw new Error("Unexpected error while fetching the data");
     }

     const result : CatResponse = await response.json()
     return result ;
}