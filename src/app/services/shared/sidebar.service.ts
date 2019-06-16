import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    { titulo: 'Dashboard', url: '/dashboard' },
    { titulo: 'Productos', url: '/productos' },
    { titulo: 'promesas', url: '/promesas' },
    //Tratar de que este componente siempre quede a lo ultimo
    { titulo: 'Logout', url: '/login' }
  ];

  constructor() { }
}
