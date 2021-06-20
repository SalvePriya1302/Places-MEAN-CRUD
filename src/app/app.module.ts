import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { PlacelistComponent } from './placelist/placelist.component';
import { PlacesService } from './places.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    PlacelistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
