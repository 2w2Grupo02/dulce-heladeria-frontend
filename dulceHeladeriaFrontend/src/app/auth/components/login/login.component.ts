import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miForm: FormGroup | any= this.fb.group({
    email:['carlo', [Validators.required, Validators.email]],
    password:['qwd', Validators.required]
  })
  constructor(private router:Router, private fb:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
  }
  ingresar(){
    this.router.navigate(['./administrador/'])
  }

}
