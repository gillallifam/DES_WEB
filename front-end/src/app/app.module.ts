import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpService } from './http.service';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule } from '@angular/material';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { AppRoutingModule } from './app-routing.module';
import { CadusuarioComponent } from './cadusuario/cadusuario.component'; // <-- NgModel lives here



@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CadastrarComponent,
    AtualizarComponent,
    CadusuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
