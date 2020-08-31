import { Component, OnInit } from '@angular/core';

import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orderQueue: any;
  public orderQueueLength;
  public currentOrders: any[] = [];

  constructor(public itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getOrders().subscribe((returned) => {
      if(returned) {
        this.orderQueue = returned.results;
        this.orderQueueLength = returned.resultsLength;
      }
    });
  }
}
