import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  user ={
    usuario:'',
    password:''
  };

  usuarioServiceS!: Usuario;
  campo!: string;

  constructor(private router: Router,
    private usuarioService: UsuarioService,
    private alertCtrl: AlertController,
    private Autentica: AuthenticationService) { 
    this.user.usuario = '';
    this.user.password = '';
    }
  
  ngOnInit() {
  }

  IniciarSesion() {
    
  this.Autentica.login();

  }
  registarAsistencia(){
    this.router.navigate(['/registar-asistencia'])
  }



  async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  ValidacionDatos(model: any) {
    for (var [key, value] of Object.entries(model)) {
      if (value === '') {
        this.campo = key;
        return false;
      }
    }
    return true;
  }

}
