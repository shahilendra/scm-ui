import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) {
  }
  getCalvingTypes(): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/calving-types`);
  }
  getBreeds(): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/breeds`);
  }
  getColors(): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/colors`);
  }
  getOccurrences(): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/occurrences`);
  }
  getLocations(): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/locations`);
  }
  getGroups(): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/groups`);
  }
  
  getStatus(): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/status`);
  }
  getSiblingsTypes(): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/siblings-types`);
  }
  getSemens(): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/semens`);
  }
  getCalvingOperators(): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/calving-operators`);
  }
}
