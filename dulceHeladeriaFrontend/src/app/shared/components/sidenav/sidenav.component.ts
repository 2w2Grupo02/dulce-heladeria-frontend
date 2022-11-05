import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(protected router:Router) { }

  ngOnInit(): void {
  }
  cerrarSesion(){
    localStorage.clear();
    this.router.navigateByUrl('./auth/login');
  }
}
