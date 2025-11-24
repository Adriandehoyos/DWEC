import { IproductInterfaces } from "./iproduct.interfaces";

//interfaces para tener la cantidad en solo los que vaya añandiendo al carrito, no todos los productos de la api
export interface IprofinalInterfaces {
  producto: IproductInterfaces
  cantidad: number;
}
