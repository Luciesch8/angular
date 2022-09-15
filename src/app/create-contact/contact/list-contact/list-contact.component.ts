import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { ModelContact } from '../../shared/model/model-contact';
import { PromiseService } from '../../shared/service/promise.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {

  constructor(public promise : PromiseService, public ModelContact : ModelContact) { }


  public dataSource: any = [];
  public displayedColumns: any = [];

  public loading: boolean = true;

  ngOnInit(): void {
    this.displayedColumns = this.ModelContact.getContactModel()['listContact']
    this.promise.getList().then( value => {
      console.log(value);
    this.dataSource = value;
    this.loading = false;
      
    })
  }

}
