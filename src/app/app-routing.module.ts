import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService  } from './services/auth-guard.service';


const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'inicio', canActivate: [AuthGuardService], loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule) },
  { path: 'recuperar-contrasena', loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
