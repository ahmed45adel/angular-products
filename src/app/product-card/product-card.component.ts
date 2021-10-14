import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServService } from '../product-serv.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  product_id: string;
  product: any = {};
  addedToCart: boolean = false;
  constructor(private actRoute: ActivatedRoute, private cartService: CartService, private service: ProductServService) {
    this.product_id = this.actRoute.snapshot.params.id;
  }
  ngOnInit(): void {
    this.service.getProduct(this.product_id)
      .subscribe(response => {
        this.product = response;
      });
    this.addedToCart = this.cartService.getItems().filter((e: any) => e.id == +this.product_id).length ? true : false
  }
  addToCartLocal(product: any) {
    this.cartService.addToCart(product);
    this.addedToCart = true
  }
  removeItemLocal(id: any) {
    this.cartService.removeItem(id);
    this.addedToCart = false
  }
}
