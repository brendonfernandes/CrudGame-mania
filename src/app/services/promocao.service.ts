import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../models/promocao';

@Injectable({
  providedIn: 'root'
})
export class promocaoService {
  // VARIAVEL Criada para armazenar o endereço da API

  url = "http://localhost:3000/promocao"

  // INJEÇÃO DE DEPENDENCIA HttpClient

  constructor(private httpClient: HttpClient) { }
// VARIAVEL QUE ARMAZENA AS CONFIGURAÇÕES DOS HEADERS DA REQUISIÇÃO
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'aplication/json'})
  }
  // METODO GET, QUE VAI TRAZER AS NOTICIAS DA API
  getPromocoes(): Observable<Promocao[]> {
    return this.httpClient.get<Promocao[]>(this.url)
  }
  postPromocao(promocao: Promocao): Observable<Promocao> {
    return this.httpClient.post<Promocao>(this.url, JSON.stringify(promocao), this.httpOptions  )
  }
}
