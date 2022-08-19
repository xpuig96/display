import { Component, OnInit,} from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

}
