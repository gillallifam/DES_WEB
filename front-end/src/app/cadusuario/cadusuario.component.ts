import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadusuario',
  templateUrl: './cadusuario.component.html',
  styleUrls: ['./cadusuario.component.css']
})
export class CadusuarioComponent implements OnInit {
  usuario = {
    "nome" : "",
    "senha" : ""
  }

  constructor(public httpService : HttpService, private route: ActivatedRoute,  private location: Location) {
    this.httpService.location = location;
  }

  ngOnInit() {}
  cadastrar() {
    this.httpService.cadastrarUsuario(this.usuario);
  }
}
