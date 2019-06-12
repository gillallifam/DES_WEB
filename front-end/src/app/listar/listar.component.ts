import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Pessoa {
  name: string;
  senha: string;
}

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"]
})
export class ListarComponent implements OnInit {
  users = [];
  user;
  atualizar = false;
  constructor(private httpService: HttpService) {
    this.httpService = httpService;
    this.users = this.httpService.users;
  }

  ngOnInit() {
    this.httpService.getUsuarios();
  }
  deletar(usuario) {
    console.log("usuario.id" + usuario._id);
    this.httpService.deletarUsuario(usuario);
  }
  alterar(usuario) {
    this.user = usuario;
    this.atualizar = true;
  }
}
