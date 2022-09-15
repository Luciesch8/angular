import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  @Input() dataSource = [];
  @Input() displayedColumns = [];

  public showColumn : any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.showColumn = this.displayedColumns.map(element => element['column']);
    console.log(this.displayedColumns);
    console.log(this.showColumn);
    
  }

}