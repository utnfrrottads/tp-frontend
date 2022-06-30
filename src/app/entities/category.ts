import { ICarouselable } from './carouselable';

export interface ICategory extends ICarouselable {
  name: string;
  description: string;
  urlImage: string;
}
