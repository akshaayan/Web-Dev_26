export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  price: string;
  rating: string;
  in_stock: boolean;
  created_at: string;
}

export interface ApiPage<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
