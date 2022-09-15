import { ICart } from "./cart";
import { IPurchase } from "./purchase";

export interface ICustomer {
  username: string;
  name: string;
  lastName: string;
  password: string;
  dni: string;
  purchases: IPurchase[];
  carts: ICart[];
}
