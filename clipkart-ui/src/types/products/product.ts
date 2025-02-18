export interface IProduct {
  name: string;
  price: string;
  rating: number;
  reviews: string;
  description: string;
}

export interface IProductListProps {
  product: IProduct[];
  onAddToCartButtonClicked: (product: IProduct) => void;
}

export interface IProductProps {
  product: IProduct;
}
