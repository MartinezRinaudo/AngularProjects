import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemEntity } from 'src/app/Entity/item-entity';
import { ItemService } from 'src/app/Service/item.service';

@Component({
  selector: 'app-item-edition',
  templateUrl: './item-edition.component.html',
  styleUrls: ['./item-edition.component.css']
})
export class ItemEditionComponent implements OnInit {

  item:ItemEntity;
  id:number;

  constructor(private itemService:ItemService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItemById(this.id).subscribe(data => {
      if(data){
        this.item = data;
      }
    })
  }

  Save(itemForm: any){
    console.log(itemForm.form.value);
  }
}
