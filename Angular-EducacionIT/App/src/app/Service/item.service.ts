import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ItemEntity } from '../Entity/item-entity';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  constructor(private route:ActivatedRoute, private http:HttpClient, private router:Router) {}
  
  getItemById(id:number):Observable<ItemEntity>{
    return this.http.get<ItemEntity>('http://localhost:3000/items/' + id, httpOptions);
  }

  getItems():Observable<ItemEntity[]> {
    return this.http.get<ItemEntity[]>('http://localhost:3000/items')
  }

  confirmation(btnSelected:string):string{
    switch (btnSelected) {
      case "XMARK":
        return "¿Desea volver a la lista de artículos?";
      case "PEN":
        return "¿Desea editar el artículo seleccionado?";
      default:
        return "Opción Invalida";
    }
  }
  routeUrl(btnSelected:string, id:number):string{
    switch (btnSelected) {
      case "XMARK":
        return "/articulos"; 
      case "PEN":
        return "/articulos/"+ id + "/editar";
      default:
        return "Opción Invalida";
    }
  }
}
