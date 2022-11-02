import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AgendarService {

  private readonly API = "https://parseapi.back4app.com/parse/classes/AGENDAMENTOS";

  constructor(private http: HttpClient) { }

  Agendar(agendamento: any): Observable<any> {
    let result: Observable<any> = this.http.post<any>(this.API, agendamento,{
        headers: {
          'X-Parse-Application-Id': 'm3UgfLRTEySnj2ZQ52K8g4eJePPGCEbPOc5i31Pf',
          'X-Parse-REST-API-Key': 'XghWPrldwIgCSBgq57ytNtrbTNmBLz9iQ5e1BIIj'
        }
      })
      return result;
  }
}
