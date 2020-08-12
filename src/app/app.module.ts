import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//custom IMPORTS
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Routing module 
import { AppRoutingModule } from './app-routing.module';


//components 
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    CarouselModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
