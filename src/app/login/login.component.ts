import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }
  Ingresar(){
    this.router.navigate(['/dashboard']);
  }
}
