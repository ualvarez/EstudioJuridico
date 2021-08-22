import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumExampleComponent } from './album-example/album-example.component';
import { CarouselExampleComponent } from './carousel-example/carousel-example.component';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    AlbumExampleComponent,
    CarouselExampleComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    SimpleSmoothScrollModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
