import { Component, OnInit } from '@angular/core';
import { ItemEntity } from 'src/app/Entity/item-entity';
import { ItemListServiceService } from 'src/app/Service/item-list-service.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items:any;
  
   
  constructor(private itemsService: ItemListServiceService){

  }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe(data => {
      this.items = data;
      console.log(this.items);
    });
  }

  onSelect(item:ItemEntity):void {
    console.log(item);
  }
}
