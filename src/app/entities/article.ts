import { ICarouselable } from './carouselable';
import { ICategory } from './category';
import { IPrice } from './price';
import { IProvider } from './provider';

export interface IArticle extends ICarouselable {
  _id: string;
  code: string;
  description: string;
  amountToOrder: number;
  orderPoint: number;
  urlImage: string;
  image: string;
  stock: number;
  category: ICategory;
  price: IPrice;
  prices: IPrice[];
  providers: IProvider[];
}
