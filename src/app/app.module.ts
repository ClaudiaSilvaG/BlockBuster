import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { PreloadAllModules, RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicRouteStrategy } from "@ionic/angular/standalone";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { MenuPrincipalComponent } from "./components/menu-principal/menu-principal.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    // IonicModule.forRoot(),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    MenuPrincipalComponent,
    IonicModule, FormsModule, CommonModule, ReactiveFormsModule, RouterModule
    // IonicModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
})
export class AppModule { }
