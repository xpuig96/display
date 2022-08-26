import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';
import { InfoMainService } from 'src/app/services/info-main.service';





@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  public main: any;


  constructor(public _infoMainService:InfoMainService, private router:Router) { 
  
  
    
  }

  ngOnInit(): void {
    this.main = this._infoMainService.getMain();
  }

  onEdit(){
    this.router.navigate(['/dashboard/edit-main'])
  }
   
}

