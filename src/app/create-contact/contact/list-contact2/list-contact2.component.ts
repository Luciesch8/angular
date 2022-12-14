import { Component, OnInit } from '@angular/core';
import { ModelContact } from '../../shared/model/model-contact';
import { PromiseService } from '../../shared/service/promise.service';

@Component({
  selector: 'app-list-contact2',
  templateUrl: './list-contact2.component.html',
  styleUrls: ['./list-contact2.component.scss']
})
export class ListContact2Component implements OnInit {

  constructor(public promise : PromiseService, public ModelContact : ModelContact) { }


  public dataSource: any = [];
  public displayedColumns: any = [];

  public loading: boolean = true;

  ngOnInit(): void {
    this.loading = true;
    this.displayedColumns = this.ModelContact.getContactModel()['listContact2'];

    let localContact = localStorage.getItem("listContact");

    if (localContact) {
      this.dataSource = JSON.parse(localContact);
    }
    
    this.loading = false;

  }




  public getLine(object: any){
    console.log(object);
    
  }


}
