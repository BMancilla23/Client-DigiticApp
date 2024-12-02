export type Product = {
  id: number;
  image: string;
  brand: string;
  title: string;
  description?: string;
  offer?: number;
  price: number;
  oldPrice?: number;
};
