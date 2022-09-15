import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})


export class AccueilComponent implements OnInit {

  constructor( public router : Router){

  }

  ngOnInit():void{

  }


  public navigate(url: string) {

    this.router.navigate([url]);
    
  }


}
