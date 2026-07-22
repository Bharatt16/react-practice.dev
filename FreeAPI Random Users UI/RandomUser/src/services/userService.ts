import type { UserResponse } from "../types/user.ts";


const API_URL = "https://api.freeapi.app/api/v1/public/randomusers";

export async function getUsers(): Promise<UserResponse> {
     const response = await fetch(API_URL);

     if(!response.ok){
        throw new Error("Unexpected error while fetching the data");
     }

     const result : UserResponse = await response.json()
     return result ;
}