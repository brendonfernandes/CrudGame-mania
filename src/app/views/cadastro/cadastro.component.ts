import { Component, OnInit } from '@angular/core';
import { Cadastro } from 'src/app/models/cadastro';
import { CadastroService } from 'src/app/services/cadastro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastro: Cadastro = {
  }

  constructor (private cadastroService: CadastroService, private router: Router) {
  }

  ngOnInit(): void {

  }
  

  createCadastro(): void{
    this.cadastroService.create(this.cadastro).subscribe (() =>{
      this.cadastroService.showMessege('Usuário Cadastrado!')
    })
  }
  deletarCadastro(): void{
    this.router.navigate([''])
  }
  tabelasCadastro(): void{
    this.router.navigate(['/cadastro/tabela'])
  }
}



