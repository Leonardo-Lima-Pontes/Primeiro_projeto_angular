import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A revolta do zubu';
  nome = 'Leonardo Lima Pontes';

  mostrarNome(){
    return this.nome;
  }

  retornarDobro(numero: number){
    return  numero * 2;
  }
}
