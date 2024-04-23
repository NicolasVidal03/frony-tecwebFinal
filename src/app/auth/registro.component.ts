import {Component, OnInit} from '@angular/core';
import {LoginUsuarioDto} from "../models/login-usuario.dto";
import {NuevoUsuarioDto} from "../models/nuevo-usuario.dto";
import {AuthService} from "../services/auth.service";
import {TokenService} from "../services/token.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit{

  usuario: NuevoUsuarioDto = new NuevoUsuarioDto('', '', '', '');

  nombre: string="";
  email: string="";
  nombreUsuario: string = "";
  password: string ="";

  constructor(
    private authService: AuthService,
   // private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    this.usuario = new NuevoUsuarioDto(this.nombre, this.email, this.nombreUsuario, this.password);
    console.log(this.usuario);
    /*
    this.authService.registro(this.usuario).subscribe(
      data=> {
        this.toastrService.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/login']);
      },
      err => {
        this.toastrService.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        })
      }
    )*/



    this.authService.registro(this.usuario).subscribe(
      data => {
        console.log('OK');
        this.router.navigate(['/login']);
      },
      err => {
        console.log('El proceso falló en terrible sufrimiento, manco')
      }
    )
  }


}
