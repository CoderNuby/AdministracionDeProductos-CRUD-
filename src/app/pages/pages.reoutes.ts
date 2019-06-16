import { RouterModule, Routes } from "@angular/router";


import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProductosComponent } from './productos/productos.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'productos', component: ProductosComponent},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes);
 