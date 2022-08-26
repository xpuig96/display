import { Injectable } from '@angular/core';
import { Display } from '../interfaces/displays';


@Injectable({
  providedIn: 'root'
})
export class DisplaysService {

  displayList: Display[] = [
    {type: 1, name: 'R_001', ip: '172.20.20.135', port: 5021},
    {type: 2, name: 'R_002', ip: '172.20.20.136', port: 5021},
    
    
  ];

  constructor() { }

  getDisplay() {
    return this.displayList.slice();
  }
  
  deleteDisplay(index:number) {
    this.displayList.splice(index, 1);
  }

  addDisplay(display: Display) {
    this.displayList.push(display);
  }
}

