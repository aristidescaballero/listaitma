import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'profesor', loadChildren: './profesor/profesor.module#ProfesorPageModule' },
  { path: 'materias', loadChildren: './materias/materias.module#MateriasPageModule' },
  { path: 'materias2', loadChildren: './materias2/materias2.module#Materias2PageModule' },
  { path: 'materias3', loadChildren: './materias3/materias3.module#Materias3PageModule' },
  { path: 'materias4', loadChildren: './materias4/materias4.module#Materias4PageModule' },
  { path: 'grafica', loadChildren: './grafica/grafica.module#GraficaPageModule' },
  { path: 'reporte', loadChildren: './reporte/reporte.module#ReportePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
