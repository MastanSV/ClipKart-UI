export interface IProductCardProps {
  name: string;
  price: string;
  rating: number;
  reviews: string;
  description: string;
}

export interface IProductsList {
  productsData: IProductCardProps[];
}
