import { Routes } from '@angular/router';
import { IncidenciaViewComponent } from './views/incidencia-view/incidencia-view.component';
import { ComercianteViewComponent } from './views/comerciante-view/comerciante-view.component';
import { NotificacionViewComponent } from './views/notificacion-view/notificacion-view.component';;

export const routes: Routes = [
      { path: 'incidencia', component: IncidenciaViewComponent},
      { path: 'comerciante', component: ComercianteViewComponent },
      { path: 'notificacion', component: NotificacionViewComponent }
];
