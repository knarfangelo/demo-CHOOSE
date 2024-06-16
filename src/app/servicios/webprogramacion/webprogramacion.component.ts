import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-webprogramacion',
  standalone: true,
  imports: [RouterLink],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './webprogramacion.component.html',
  styleUrl: './webprogramacion.component.css'
})
export class WebprogramacionComponent {

}
