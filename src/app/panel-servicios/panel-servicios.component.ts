import { Component } from '@angular/core';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panel-servicios',
  standalone: true,
  imports: [NavegacionComponent, NavegacionComponent, RouterLink],
  templateUrl: './panel-servicios.component.html',
  styleUrl: './panel-servicios.component.css'
})
export class PanelServiciosComponent {

}
