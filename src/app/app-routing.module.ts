import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BusComponent } from './bus/bus.component';
import { BusRoutesComponent } from './bus-routes/bus-routes.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'busroutes/:id', component: BusRoutesComponent },
    { path: 'bus', component: BusComponent }
];


@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
