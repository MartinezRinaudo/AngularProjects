import { Component, Input, OnInit } from '@angular/core';
import { ItemEntity } from 'src/app/Entity/item-entity';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  item:ItemEntity = { 
    id:1,
    name:"Zapatillas",
    description:"Adidas",
    price:18000,
    stock:true
  };

  constructor(){}

  ngOnInit(): void {
    
  }


}
