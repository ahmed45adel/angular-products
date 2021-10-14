import { CardDetailsService } from './../card-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  wishListCounter: number;
  constructor(private wishListService: CardDetailsService) { }

  ngOnInit(): void {
    this.wishListService.currentWishListCount.subscribe(value => this.wishListCounter = value)
  }
}
