export interface Quote {
  id: number;
  content: string;
  author: string;
}

export interface QuoteResponse {
  statusCode: number;
  data: {
    page: number;
    limit: number;
    totalPages: number;
    previousPage: boolean;
    nextPage: boolean;
    totalItems: number;
    currentPageItems: number;
    data: Quote[];
  };
}