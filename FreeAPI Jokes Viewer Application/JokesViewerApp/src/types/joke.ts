export interface Joke {
  id: number;
  content: string;
  categories: string[];
}

export interface JokeApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: Joke[];
}