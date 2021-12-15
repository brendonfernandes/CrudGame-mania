import { Component, OnInit } from '@angular/core';
import { Promocao } from 'src/app/models/promocao';
import { promocaoService } from 'src/app/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaPromocoes = [] as Promocao[];
  promocaoForm = {
  titulo: "promoção extra",
  descrição: " descrição da promoção extra"
}

constructor(private promocaoService: promocaoService) {}


ngOnInit(): void { 
  this.carregarPromocoes();
}
carregarPromocoes(){
  this.promocaoService.getPromocoes().subscribe( (promocoesRecebidas: Promocao[]) => {
    this.listaPromocoes = promocoesRecebidas;
    console.log(this.listaPromocoes)
  })
}
  salvarPromoção() {
  this.promocaoService.postPromocao(this.promocaoForm).subscribe( () => {
  this.carregarPromocoes();
} )
  }

}
