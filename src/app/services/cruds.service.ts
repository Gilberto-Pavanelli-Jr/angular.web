import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CRUD } from '../models/crud.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudsService {
baseApiUrl:string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }


  getCruds(): Observable<CRUD[]>{
return this.http.get<CRUD[]>(this.baseApiUrl+'/api/cruds');
  }
}
