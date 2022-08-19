import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Display } from 'src/app/interfaces/displays';
import { DisplaysService } from 'src/app/services/displays.service';



@Component({
  selector: 'app-displays',
  templateUrl: './displays.component.html',
  styleUrls: ['./displays.component.css']
})
export class DisplaysComponent implements OnInit {

  displayList: Display[] = [];

  displayedColumns: string[] = ['type', 'name', 'ip', 'port', 'actions'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _displayService: DisplaysService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadDisplays();
  }

  loadDisplays() {
    this.displayList = this._displayService.getDisplay();
    this.dataSource = new MatTableDataSource(this.displayList);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteDisplay(index:number) {
    console.log(index);
    this._displayService.deleteDisplay(index);
    this.loadDisplays();

    this._snackBar.open('Display Deleted','', {
      duration: 5000,
      horizontalPosition:'center',
      verticalPosition: 'bottom'
    })
  }

 

}
