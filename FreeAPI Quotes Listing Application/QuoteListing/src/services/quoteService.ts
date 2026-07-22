import type { QuoteResponse } from "../types/quote.ts";


const API_URL = "https://api.freeapi.app/api/v1/public/quotes";

export async function getQuotes(): Promise<QuoteResponse> {
     const response = await fetch(API_URL);

     if(!response.ok){
        throw new Error("Unexpected error while fetching the data");
     }

     const result : QuoteResponse = await response.json()
     return result ;
}