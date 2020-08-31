import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

import { Item } from './item.model';
import { ItemAPIResponse } from './response.model';

@Injectable()
export class ItemService {
  private backendURL = environment.backendURL;
  constructor(private httpClient: HttpClient, private router: Router) {}

  getMenu(): any {
    return this.httpClient.get<ItemAPIResponse>(this.backendURL + 'api/menu/');
  }

  getOrders(): any {
    return this.httpClient.get<ItemAPIResponse>(this.backendURL + 'api/orders/');
  }

  sendOrder(order: any) {
    this.httpClient.post<{orderPlaced: boolean}>(this.backendURL + 'api/placeorder', order)
    .subscribe((response) =>{
        this.router.navigate(['/index']);
    });
  }
}
