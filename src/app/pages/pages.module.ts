import { NgModule } from "@angular/core";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from './pages.component';

//Modulo
import { SharedModule } from '../shared/shared.module';

//ROUTES
import { PAGES_ROUTES } from './pages.reoutes';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProductosComponent
    ],
    exports: [
        DashboardComponent,
        ProductosComponent
    ], 
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }