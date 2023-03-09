import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
  
  constructor(private route:ActivatedRoute, private http:HttpClient) {}
  
  getItemById(id:number):Observable<ItemEntity>{
    return this.http.get<ItemEntity>('http://localhost:3000/items/' + id, httpOptions);
  }

  getItems():Observable<ItemEntity[]> {
    return this.http.get<ItemEntity[]>('http://localhost:3000/items')
  }

}
