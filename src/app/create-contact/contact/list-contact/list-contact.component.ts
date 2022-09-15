import { Component, OnInit } from '@angular/core';
import { PromiseService } from '../../shared/service/promise.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {

  constructor(public promise : PromiseService) { }

  ngOnInit(): void {
    this.promise.getList().then( value => {
      console.log(value);
      
    })
  }

}
