import { Component, OnInit } from '@angular/core';
import { ItemEntity } from 'src/app/Entity/item-entity';
import { ItemService } from 'src/app/Service/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:ItemEntity[];
 
  constructor(private itemService:ItemService){}
  
  ngOnInit(): void {
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
    });
  }


}
