import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { //Login con usuario y contraseña
    this.form = this.fb.group({
      user: ['', Validators.required], //Para que el formulario de inicio de sesion sea valido hay que poner los datos bien
      pass: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  done() { //funcion para validar usuario y contraseña
    console.log(this.form);
    const user = this.form.value.user; //muestra el usuario y el password escritos
    const pass = this.form.value.pass;
    
    if (user == 'admin' && pass == '12345') { //condicional para iniciar sesion con admin
      this.fakeLoading(); //hace la animacion de cargar y redirecciona
    } else{
      this.error(); //mensaje error si los datos son incorrectos
      this.form.reset(); //resetea el formulario
    }
  }

  error(){
    this._snackBar.open('Incorrect User/Password','', {
      duration: 5000,
      horizontalPosition:'center',
      verticalPosition: 'bottom'
    })
  };

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard'])
    }, 1500);
  }
  
}
