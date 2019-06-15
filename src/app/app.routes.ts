import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    { path: '',
     component: PagesComponent,
     children: [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: DashboardComponent}
     ]
     },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent},
    { path: '**', component: PagenotfoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });