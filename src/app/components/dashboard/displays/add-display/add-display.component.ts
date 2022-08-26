import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Display } from 'src/app/interfaces/displays';
import { DisplaysService } from 'src/app/services/displays.service';

@Component({
  selector: 'app-add-display',
  templateUrl: './add-display.component.html',
  styleUrls: ['./add-display.component.css']
})
export class AddDisplayComponent implements OnInit {

  form: FormGroup;
  

  constructor(private fb: FormBuilder, 
              private _displayService: DisplaysService,
              private router: Router,
              private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      type:['',Validators.required],
      name:['',Validators.required],
      ip:['',Validators.required],
      port:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  addDisplay(){
    console.log(this.form);

    const display: Display = {
      type: this.form.value.type,
      name: this.form.value.name,
      ip: this.form.value.ip,
      port: this.form.value.port,
    }

    this._displayService.addDisplay(display);
    this.router.navigate(['/dashboard/displays'])

    this._snackBar.open('Display Added','', {
      duration: 5000,
      horizontalPosition:'center',
      verticalPosition: 'bottom'
    })
  }

}
