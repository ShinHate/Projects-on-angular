import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//@Components
import { AppComponent } from './app.component';
import { CarComponent } from "./car/car.component";
import { CarAddComponent } from "./car-add/car-add.component";
import {CarsService} from "./cars.service";

import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
