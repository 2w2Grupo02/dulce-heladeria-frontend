import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/validators/MustMatch';
import { usuario } from '../../interfaces/Usuario';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  private usuario!:usuario; 
  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    nombre : new FormControl("", [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(100)
    ]),
    apellido : new FormControl("",[
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(100)
    ]),
    dni : new FormControl("",Validators.required),
    email : new FormControl("",[
      Validators.required,
      Validators.email
    ]),
    userName : new FormControl("",[
      Validators.required
    ]),
    contraseña : new FormControl("",[
      Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ]),
    confirmarContraseña : new FormControl("",[
      Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ]),
    rol : new FormControl("",Validators.required)
  }, [MustMatch("password","confirmarContraseña")]);

  enviar(){
    if(this.form.valid){
      alert("form valido")
    } else {
      alert("form invalido")
    }
  }


}
