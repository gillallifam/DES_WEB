import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
    users = [];
    baseURL: string;
    flag = false;
    location;
    constructor(private http: HttpClient) {
        this.baseURL = 'http://localhost:3000/usuarios';
    }

    getUsuario(id) {
        let usuario;
        this.users.forEach(element => {
            if (element._id == id) usuario = element;
        });;
        return usuario;
    }

    getUsuarios() {

        this.http.get(this.baseURL)
            .subscribe((data: any) => {
                this.users.splice(0);
                data.forEach(element => {
                    this.users.push(element);
                    console.log(element);
                });
            })
    }

    cadastrarUsuario(usuario) {
        console.log("inspecao:" + this.baseURL + 'inserir');
        this.http.post(this.baseURL, usuario).subscribe((data: any) => {
            console.log("data resposta: " + data);
            this.getUsuarios();
            this.location.back();
        });
    }

    atualizarUsuario(usuario) {
        this.http.put(this.baseURL+'/'+usuario._id,
         {nome: usuario.nome, senha:usuario.senha})
        .subscribe((data: any) => {
            console.log("data resposta: " + data);
            this.getUsuarios();
            this.location.back();
        });

    }
    deletarUsuario(usuario) {
        console.log("usuario" + JSON.stringify(usuario));
        this.http.request('delete', this.baseURL+'/'+usuario._id, { body: usuario })
            .subscribe((data: any) => {
                this.getUsuarios();
            })
    }
}