import { Routes } from '@angular/router';
import { PanelNosotrosComponent } from './panel-nosotros/panel-nosotros.component';
import { PanelBusquedaComponent } from './panel-busqueda/panel-busqueda.component';
import { PanelServiciosComponent } from './panel-servicios/panel-servicios.component';
import { PanelContactoComponent } from './panel-contacto/panel-contacto.component';
import { SociallisteningComponent } from './servicios/sociallistening/sociallistening.component';
import { WebprogramacionComponent } from './servicios/webprogramacion/webprogramacion.component';
import { ContenidodigitalComponent } from './servicios/contenidodigital/contenidodigital.component';

export const routes: Routes = [
    {path:'inicio', component:PanelBusquedaComponent},
    {path:'', component:PanelBusquedaComponent},
    {path:'nosotros', component:PanelNosotrosComponent},
    {path:'servicios', component:PanelServiciosComponent},
    {path:'contacto', component:PanelContactoComponent},
    {path:'servicios/sociallistening', component:SociallisteningComponent},
    {path:'servicios/webprogramacion', component:WebprogramacionComponent},
    {path:'servicios/contenidodigital', component:ContenidodigitalComponent},
];
