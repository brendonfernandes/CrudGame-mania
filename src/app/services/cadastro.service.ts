import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from '../models/cadastro';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http:localhost:3001/Cadastro"

  constructor(private http: HttpClient) { }
  showMessege(msg: string): void{
  }
  create(cadastro: Cadastro): Observable <Cadastro>{
      return this.http.post<Cadastro>(this.baseUrl, cadastro)
  }
}
