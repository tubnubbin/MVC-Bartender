import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public cocktailMenu: Item[];
  public currentOrder: Item[] = [];
  public orderLength;
  public orderTotal = 0;
  public displayTotal;

  constructor(public itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.itemService.getMenu().subscribe((returned) => {
      if(returned) {
        this.cocktailMenu = returned.results;
      }
    });
    var temp = JSON.parse(localStorage.getItem("currentOrder"));
    if(temp != null) {
      this.currentOrder = temp;
      this.orderLength = this.currentOrder.length;
      for(var i = 0; i < this.orderLength; i++){
        this.orderTotal += this.currentOrder[i].price;
      }
      this.displayTotal = parseFloat(this.orderTotal.toString()).toFixed(2);
    }
    else {
      this.orderLength = 0;
      this.orderTotal = 0.00;
    }
  }
  addToOrder(itemName, itemDescription, itemPrice) {
    var currentItem: Item = {
      name: itemName,
      description: itemDescription,
      price: itemPrice
    }
    this.currentOrder.push(currentItem);
    localStorage.setItem("currentOrder",JSON.stringify(this.currentOrder));
    window.location.reload();
  }
  removeFromOrder(itemName) {
    for(var i = 0; i < this.orderLength; i++) {
      if(this.currentOrder[i].name == itemName) {
        this.currentOrder.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("currentOrder",JSON.stringify(this.currentOrder));
    window.location.reload();
  }

  onSend(form: NgForm) {
    var tempName;
    var tempOrder: any[] = [];
    var tempString;

    if(form.value.name == "") {
      tempName = "Unnamed Patron";
    }
    else {
      tempName = form.value.name;
    }
    for(var i in this.currentOrder) {
      tempOrder.push(this.currentOrder[i].name);
    }
    tempString = tempOrder.join();
    const order: any = {
      name: tempName,
      drinks: tempString
    };
    localStorage.setItem('test', JSON.stringify(order));
    localStorage.removeItem('currentOrder');
    this.itemService.sendOrder(order);
  }
}

