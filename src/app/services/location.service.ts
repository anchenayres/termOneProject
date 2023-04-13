import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Africa } from '../models/africa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/africa"

  items: Africa[] = []

  listAfrica(): Observable<Africa[]> {
    return this.http.get<Africa[]>(this.url)
   
  }

      //CREATE
      createNewItem(item: Africa): Observable<Africa> {
        return this.http.post<Africa>(this.url, item)
      }
  

}

