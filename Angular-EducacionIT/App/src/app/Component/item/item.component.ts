import { Component, OnInit } from '@angular/core';
import { ItemEntity } from 'src/app/Entity/item-entity';
import { ItemService } from 'src/app/Service/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public id:number;
  public item:ItemEntity;

  constructor(private itemService:ItemService, private route:ActivatedRoute){
}

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItemById(this.id).subscribe((data)=> {
        this.item = data;
        console.log(this.item)
    });
  }
}
