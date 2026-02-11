import { Ihero } from './ihero.interface';

export interface Ipages {
  content: Ihero[];
  totalElements: number;
  totalPages: number;
  number: number; // página actual
  size: number; // tamaño por página
}
