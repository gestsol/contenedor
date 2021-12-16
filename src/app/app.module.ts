import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ContenedoresComponent } from './components/contenedores/contenedores.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InferiorComponent } from './components/inferior/inferior.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContenedoresComponent,
    SidebarComponent,
    InferiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
