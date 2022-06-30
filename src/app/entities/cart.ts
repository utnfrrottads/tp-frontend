import { ILine } from "./line";

export interface ICart {
  date: Date;
  name: string;
  cartLines: ILine[];
}
