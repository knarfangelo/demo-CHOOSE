import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-contenidodigital',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterLink],
  templateUrl: './contenidodigital.component.html',
  styleUrl: './contenidodigital.component.css'
})
export class ContenidodigitalComponent {

}
