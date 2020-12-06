import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    usuario:string;
    pass:string;
    mensaje:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  validaUsuario(){
    if(this.usuario=="Chumampaco")
    {
        if(this.pass=="1234")
        {
          this.usuario="";
          this.pass="";
          this.mensaje="";
          window.localStorage.setItem('sesion','Iniciada');
          this.router.navigate(['']);
        }
        else
       this.mensaje="Password Incorrecto";

    }
    else
    this.mensaje="Usuario Desconocido";
  }

}
