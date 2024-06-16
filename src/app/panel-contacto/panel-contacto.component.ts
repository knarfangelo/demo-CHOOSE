import { Component } from '@angular/core';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { FormsModule} from '@angular/forms';
import { PanelFooterComponent } from '../panel-footer/panel-footer.component';

@Component({
  selector: 'app-panel-contacto',
  standalone: true,
  imports: [NavegacionComponent, FormsModule, PanelFooterComponent],
  templateUrl: './panel-contacto.component.html',
  styleUrl: './panel-contacto.component.css'
})
export class PanelContactoComponent {

  usuario = {
    nombre: '',
    apellido: '',
    email: '',
    pais:'',
    telefono: '',
    mensaje: ''
  };

  onSubmit() {
    console.log('Formulario enviado:', this.usuario);
    this.usuario = {
      nombre: '',
      apellido: '',
      email: '',
      pais:'',
      telefono: '',
      mensaje: ''
    };
  }

}
