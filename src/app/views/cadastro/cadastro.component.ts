import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { CadastroService } from 'src/app/services/cadastro.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastro: Login = {
  }

  constructor (private cadastroService: CadastroService, private router: Router) {
  }

  ngOnInit(): void {

  }
  mensagem = "" ;
  


  createCadastro(): void{
    
    this.cadastroService.create(this.cadastro).subscribe ((response) =>{
      this.mensagem = "Usuário Cadastrado!"
      this.router.navigateByUrl('');

    }, (error) => {
      this.mensagem = error.error;
    } )
  }
  deletarCadastro(): void{
    this.router.navigate(['/login/users'])
  }
  tabelasCadastro(): void{
    this.router.navigate(['/cadastro/tabela'])
  }

}



