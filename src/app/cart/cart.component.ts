import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  increaseQ(id: any) {

    this.cartService.increaseQuantity(id);
  }
  decreaseQ(id: any, q: number) {
    if (!q) {
      let remove = confirm('Want to remove This Item?');
      remove && this.cartService.removeItem(`${id}`)
      this.items = this.cartService.getItems();
    } else {
      this.cartService.decreaseQuantity(id);
    }

  }

}
