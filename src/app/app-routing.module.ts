import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BusComponent } from './bus/bus.component';
import { RoutesComponent } from './routes/routes.component';

const routes: Routes = [
// { path: '', redirectTo: '/bus', pathMatch: 'full' },
    { path: 'routes/:id', component: RoutesComponent },
    { path: '', component: BusComponent }
];


@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
