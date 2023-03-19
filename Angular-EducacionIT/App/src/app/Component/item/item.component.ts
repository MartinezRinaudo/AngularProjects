import { Component, OnInit } from '@angular/core';
import { ItemEntity } from 'src/app/Entity/item-entity';
import { ItemService } from 'src/app/Service/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faPen, faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  edit = faPen;
  close = faXmark;
  deleteItem = faTrash;
  btnSelected:string;
  id:number;
  item:ItemEntity;
  confirmationQuestion:string;
  routeToSend:string;
  
  constructor(private itemService:ItemService, private route:ActivatedRoute, private router:Router){
}


  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItemById(this.id).subscribe((data:ItemEntity)=> {
        this.item = data;
    });
  }
  
  confirmationBtn(event:any){
    this.btnSelected = (event.iconName).toUpperCase();
    this.confirmationQuestion = this.itemService.confirmation(this.btnSelected);
    this.routeToSend = this.itemService.routeUrl(this.btnSelected, this.id);
  }


}
