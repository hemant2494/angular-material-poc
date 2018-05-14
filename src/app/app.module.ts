import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './core/ngmaterial.module';
import {AppRoutingModule} from "./core/app.routing.module";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material'



import { AppComponent } from './app.component';
import { SplitsyllabusComponent } from './splitsyllabus/splitsyllabus.component';

@NgModule({
  declarations: [
    AppComponent,
    SplitsyllabusComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MaterialAppModule,MatFormFieldModule,
    AppRoutingModule,MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
