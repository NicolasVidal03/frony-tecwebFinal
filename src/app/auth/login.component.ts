import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {TokenService} from "../services/token.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {LoginUsuarioDto} from "../models/login-usuario.dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: LoginUsuarioDto = new LoginUsuarioDto('', '');

  nombreUsuario: string;
  password: string;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    //private toastrService: ToastrService,
    private router: Router
  ) {

    this.nombreUsuario = "";
    this.password = "";
  }

  ngOnInit() {
  }

  onLogin(): void {
    this.usuario = new LoginUsuarioDto(this.nombreUsuario, this.password);
    this.authService.login(this.usuario).subscribe(
      data => {
        console.log(data.token);
        if(!data.token)
          console.log('error papi');
        else {
          this.tokenService.setToken(data.token);
          this.router.navigate(['/']);
        }
      }
    )
  }

}
