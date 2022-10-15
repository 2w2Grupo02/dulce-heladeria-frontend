import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    nombre : new FormControl(),
    apellido : new FormControl(),
    dni : new FormControl(),
    email : new FormControl(),
    contraseña : new FormControl(),
    confirmarContraseña : new FormControl(),
    rol : new FormControl()
  })

}
