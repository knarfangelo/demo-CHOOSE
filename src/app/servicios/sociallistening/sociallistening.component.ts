import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-sociallistening',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterLink],
  templateUrl: './sociallistening.component.html',
  styleUrl: './sociallistening.component.css'
})
export class SociallisteningComponent {

}
