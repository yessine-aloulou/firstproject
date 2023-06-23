import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {
  constructor(){ }
  productsList : Product[] = [
    {id: "1", title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: "2", title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: "3", title: "T-shirt 3", price: 16, quantity: 8, like: 0}
  ]
  maxlikes : number = 0
  buy(p:Product) {
    if(p.quantity>0){
      p.quantity--
    }
 }
  
 like(p:Product){
  p.like++
  if (p.like> this.maxlikes){
    this.maxlikes = p.like
  }
 }
   ngOnInit(): void {
   }

   
}
