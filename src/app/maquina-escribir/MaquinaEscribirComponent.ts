import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-maquina-escribir',
  standalone: true,
  imports: [],
  templateUrl: './maquina-escribir.component.html',
  styleUrl: './maquina-escribir.component.css'
})
export class MaquinaEscribirComponent implements OnInit {

  titulos: string[] = ["Web y Programacion","Inteligencia y Social","Branding y contenido digital", "Produccion Audiovisual", "Manejo de crisis"];
  tituloActual: string = '';
  indiceTituloActual: number = 0;
  indexCaracter: number = 0;
  intervaloEscribir: any;

  constructor() { }

  ngOnInit(): void {
    this.iniciarMaquinaDeEscribir();
  }

  iniciarMaquinaDeEscribir() {
    this.tituloActual = ''; // Reiniciar el título actual
    this.indexCaracter = 0; // Reiniciar el índice del caracter

    // Simular la escritura del título actual
    const titulo = this.titulos[this.indiceTituloActual];
    this.intervaloEscribir = setInterval(() => {
      if (this.indexCaracter < titulo.length) {
        this.tituloActual += titulo[this.indexCaracter];
        this.indexCaracter++;
      } else {
        clearInterval(this.intervaloEscribir);
        setTimeout(() => {
          this.borrarTitulo();
        }, 1500); // Tiempo de espera antes de borrar (en milisegundos)
      }
    }, 50); // Velocidad de escritura (en milisegundos por letra)
  }

  borrarTitulo() {
    const intervaloBorrar = setInterval(() => {
      if (this.tituloActual.length > 0) {
        this.tituloActual = this.tituloActual.slice(0, -1); // Eliminar la última letra
      } else {
        clearInterval(intervaloBorrar);
        this.indiceTituloActual++;
        if (this.indiceTituloActual === this.titulos.length) {
          this.indiceTituloActual = 0; // Reiniciar el ciclo
        }
        setTimeout(() => {
          this.iniciarMaquinaDeEscribir();
        }, 500); // Tiempo de espera antes de iniciar el próximo título (en milisegundos)
      }
    }, 40); // Velocidad de borrado (en milisegundos por letra)
  }

}
