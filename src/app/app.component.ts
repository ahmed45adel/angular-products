import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products';
  count: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.count = this.cartService.currentCount
  }
}
