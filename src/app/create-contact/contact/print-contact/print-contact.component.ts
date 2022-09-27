import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-print-contact',
  templateUrl: './print-contact.component.html',
  styleUrls: ['./print-contact.component.scss']
})
export class PrintContactComponent implements OnInit {

  constructor(private router : ActivatedRoute) { }

  public contact = [];

  public loading:boolean = true;

  ngOnInit(): void {
    let local = localStorage.getItem("listContact");

    if (local) {

    let varlocal = JSON.parse(local);

    this.contact = varlocal.filter((element:any) => element.id == this.router.snapshot.paramMap.get('idRef'));
    console.log(this.contact);
    this.loading = false;
    

    console.log(this.router.snapshot.paramMap.get('idRef'));
    

    }

   
  }

}
