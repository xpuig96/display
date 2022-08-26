import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Main } from 'src/app/interfaces/main';
import mainJson from '../../../assets/data/main.json'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public main:Main;

  constructor(private httpClient:HttpClient,) { 

    this.main = mainJson;

  }

  ngOnInit(): void {
  }

}
