import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../core/config';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {
  }
  getAnimals(): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/animals`);
  }
  postAnimal(animal: any): Observable<any> {    
    return this.http.post(`${config.baseApiURL}v1/animals`, animal);
  }

  put(animal: any, animalId: any): Observable<any> {    
    return this.http.put(`${config.baseApiURL}v1/animals/${animalId}`, animal);
  }
  getProfile(animalId: any): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/animals/${animalId}/profiles`);
  }
  getSlaughtering(animalId: any, status: any): Observable<any> {    
    return this.http.post(`${config.baseApiURL}v1/animals/${animalId}/slaughtering`, {isSlaughtering: status});
  }
  getOthersInfo(animalId: any): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/animals/${animalId}/others-info`);
  }
}
