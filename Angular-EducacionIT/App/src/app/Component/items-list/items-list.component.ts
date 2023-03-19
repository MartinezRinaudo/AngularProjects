import { Component, OnInit } from '@angular/core';
import { ItemEntity } from 'src/app/Entity/item-entity';
import { ItemService } from 'src/app/Service/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items:ItemEntity[];
  
  constructor(private itemService: ItemService){}

  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
      console.log(this.items);
    });
  }

  onSelect(item:ItemEntity):void {
  }
}
