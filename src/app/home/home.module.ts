import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { PromocoesComponent } from "./promocoes/promocoes.component";
import { MaterialModule } from "../core/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { DepoimentosModule } from "./depoimentos/depoimentos.module";

@NgModule({
  declarations: [
    HomeComponent,
    PromocoesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    DepoimentosModule
  ],
  exports: [
    HomeComponent,
    PromocoesComponent
  ]
})
export class HomeModule { }
