import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login} from '../models/login';
import { Observable } from 'rxjs';
import { users } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }
  showMessege(msg: string): void{
  }
  create(cadastro: Login ): Observable <Login>{
      return this.http.post<Login>(this.baseUrl, cadastro)
  }
  // delete( cadastro : Login ): Observable <Login> {
  //   return this.http.delete<Login>(this.baseUrl, cadastro)
  // }
}
