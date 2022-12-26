import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

import { DataService } from '../data.service';
import { Item } from '../item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  items!: Item[]; 

  constructor(
    private dataService: DataService
  ) {}
  

  ngOnInit(): void {
    this.dataService.getDealsItemsList()
    .subscribe(posts => {
      this.items = posts.map(post => {
        this.initItemProps(post); // Set the price of each Item if the current_price is not set
        return post;
      });
    });
  }

  initItemProps(item: Item) {
    if (!item.current_price) {
      item.current_price = item.original_price - (item.original_price * item.discount/100)
    }
  }
  

}
