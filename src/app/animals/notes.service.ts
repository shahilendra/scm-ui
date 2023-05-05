import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../core/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) {
  }
  get(animalId: any): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/animals/${animalId}/notes`);
  }
  post(animal: any, animalId: any): Observable<any> {    
    return this.http.post(`${config.baseApiURL}v1/animals/${animalId}/notes`, animal);
  }
  put(animal: any, animalId: any, noteId: any): Observable<any> {    
    return this.http.put(`${config.baseApiURL}v1/animals/${animalId}/notes/${noteId}`, animal);
  }
}
