import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumExampleComponent } from './album-example/album-example.component';
import { CarouselExampleComponent } from './carousel-example/carousel-example.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumExampleComponent,
    CarouselExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
