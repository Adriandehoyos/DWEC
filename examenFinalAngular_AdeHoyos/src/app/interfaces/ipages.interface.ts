import { Ininja } from "./ininja.interface";

export interface Ipages {
  content: Ininja[];
  totalElements: number;
  totalPages: number;
  number: number; // página actual
  size: number; // tamaño por página
}
