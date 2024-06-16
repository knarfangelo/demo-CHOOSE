import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelBusquedaComponent } from './panel-busqueda/panel-busqueda.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PanelBusquedaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-proyecto-02';
}
