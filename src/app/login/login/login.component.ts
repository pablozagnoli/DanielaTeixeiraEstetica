import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDTO } from 'src/Models/usuario';
import { LoginsService } from './services/logins.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: LoginsService,
    private route: Router) { }

  @Input() usuarioDT: userDTO = {
    usuario: "Usuario",
    senha: "Senha"
  }

  usuarioLogin: userDTO []= []

  ngOnInit(): void {

  }

  criarUsuario() {
    this.service.Criar(this.usuarioDT).subscribe();
    alert("usuário criado!")
  }

  TrazerUsuario() {
    this.service.Listar().subscribe((usuario) => {
      this.usuarioDT = usuario
    });
    alert(this.usuarioDT.usuario)
  }

  fazerLogin() {
    this.service.Listar().subscribe((usuario) => {
      this.usuarioLogin = usuario.results
    });

    if (this.usuarioLogin[0].usuario == this.usuarioDT.usuario
      && this.usuarioLogin[0].senha == this.usuarioDT.senha) {
      alert("Você entrou com o Usuario: " + this.usuarioDT.usuario)
      this.route.navigate(["/"]);
    }
    else{
      alert("Usuario ou senha incorretos")
    }
  }


}
