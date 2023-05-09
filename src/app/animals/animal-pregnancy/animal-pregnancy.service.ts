import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/app/core/config';

@Injectable({
  providedIn: 'root'
})
export class AnimalPregnancyService {
  constructor(private http: HttpClient) {
  }
  get(animalId: any): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/animals/${animalId}/pregnancies`);
  }
  post(data: any, animalId: any): Observable<any> {    
    return this.http.post(`${config.baseApiURL}v1/animals/${animalId}/pregnancies`, data);
  }
  put(data: any, animalId: any, id: any): Observable<any> {    
    return this.http.put(`${config.baseApiURL}v1/animals/${animalId}/pregnancies/${id}`, data);
  }
}
