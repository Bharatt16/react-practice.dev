export interface User {
  id: number;
  gender: string;

  name: {
    title: string;
    first: string;
    last: string;
  };

  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string | number;
  };

  email: string;

  dob: {
    date: string;
    age: number;
  };

  registered: {
    date: string;
    age: number;
  };

  phone: string;
  cell: string;

  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };

  nat: string;
}

export interface UserResponse {
  statusCode: number;
  data: {
    page: number;
    limit: number;
    totalPages: number;
    previousPage: boolean;
    nextPage: boolean;
    totalItems: number;
    currentPageItems: number;
    data: User[];
  };
}