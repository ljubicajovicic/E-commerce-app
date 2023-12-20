import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { DodatiProizvodi } from 'src/app/shared/models/korpa';
import { Proizvod } from 'src/app/shared/models/proizvod';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product?: Proizvod;
  quantity: number = 1;

  constructor(private basketService: BasketService, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }


  addItemToBasket() {
    this.product && this.basketService.addItemToBasket(this.product);
  }
}
