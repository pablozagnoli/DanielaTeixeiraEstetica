import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userDTO } from 'src/Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {

  private readonly API = "https://parseapi.back4app.com/parse/classes/USUARIOS";

  constructor(private http: HttpClient) { }

  Listar(): Observable<any> {
    let result = this.http.get<any>(this.API, {
      headers: {
        'X-Parse-Application-Id': 'm3UgfLRTEySnj2ZQ52K8g4eJePPGCEbPOc5i31Pf',
        'X-Parse-REST-API-Key': 'XghWPrldwIgCSBgq57ytNtrbTNmBLz9iQ5e1BIIj'
      }
    });
    return result;
  }

  Criar(usuario: any): Observable<any> {
    let result: Observable<any> = this.http.post<any>(this.API, usuario,{
        headers: {
          'X-Parse-Application-Id': 'm3UgfLRTEySnj2ZQ52K8g4eJePPGCEbPOc5i31Pf',
          'X-Parse-REST-API-Key': 'XghWPrldwIgCSBgq57ytNtrbTNmBLz9iQ5e1BIIj'
        }
      })
      return result;
  }
}
