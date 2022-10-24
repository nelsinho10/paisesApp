import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarCapita(this.termino).subscribe(
      (resp) => {
        this.paises = resp;
      },
      (error) => {
        this.hayError = true;
        this.paises = [];
        console.info(error);
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }
}
