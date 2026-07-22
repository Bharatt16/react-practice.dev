import type { MealResponse } from "../types/meal.ts";


const API_URL = "https://api.freeapi.app/api/v1/public/meals";

export async function getMeals(): Promise<MealResponse> {
     const response = await fetch(API_URL);

     if(!response.ok){
        throw new Error("Unexpected error while fetching the data");
     }

     const result : MealResponse = await response.json()
     return result ;
}