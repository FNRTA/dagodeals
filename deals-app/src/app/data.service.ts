import { Injectable } from '@angular/core';
import { Item, dealsItems } from './item';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(
    private httpClient: HttpClient
  ) { }

  getDealsItemsList() {
    let items =  this.httpClient.get<Item[]> ('assets/testItems.json');
    console.log(items);
    return items;

  }



}
