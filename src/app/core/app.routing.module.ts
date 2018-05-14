import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SplitsyllabusComponent} from '../splitsyllabus/splitsyllabus.component'

const routes: Routes = [
   {path: 'splitsyllabus', component: SplitsyllabusComponent},
  ];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }
  