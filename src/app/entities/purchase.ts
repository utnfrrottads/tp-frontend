import { ILine } from "./line";

export interface IPurchase {
  date: Date;
  purchaseLines: ILine[];
}
