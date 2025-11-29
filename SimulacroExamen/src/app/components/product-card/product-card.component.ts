import { Component, Input } from '@angular/core';
import { Iproducto } from '../../interfaces/Iproducto.interfaces';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {

  @Input() miProducto!: Iproducto;


}
