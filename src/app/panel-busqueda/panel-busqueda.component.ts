import { Component } from '@angular/core';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { MaquinaEscribirComponent } from '../maquina-escribir/MaquinaEscribirComponent';

@Component({
  selector: 'app-panel-busqueda',
  standalone: true,
  imports: [NavegacionComponent, MaquinaEscribirComponent],
  templateUrl: './panel-busqueda.component.html',
  styleUrl: './panel-busqueda.component.css'
})
export class PanelBusquedaComponent {

}
