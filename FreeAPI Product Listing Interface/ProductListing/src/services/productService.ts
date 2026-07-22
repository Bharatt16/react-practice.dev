import type { ProductResponse } from "../types/product.ts";


const API_URL = "https://api.freeapi.app/api/v1/public/randomproducts";

export async function getProducts(): Promise<ProductResponse> {
     const response = await fetch(API_URL);

     if(!response.ok){
        throw new Error("Unexpected error while fetching the data");
     }

     const result : ProductResponse = await response.json()
     return result ;
}