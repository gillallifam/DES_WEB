import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-atualizar",
  templateUrl: "./atualizar.component.html",
  styleUrls: ["./atualizar.component.css"]
})
export class AtualizarComponent implements OnInit {
  usuario;

  httpService: HttpService;
  constructor(
    httpService: HttpService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.httpService = httpService;
    this.httpService.location = location;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log("id= ", id);
    this.usuario = this.httpService.getUsuario(id);
  }
  atualizar() {
    this.httpService.atualizarUsuario(this.usuario);
  }
}
