import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {


  public registerForm : FormGroup = this.fb.group({
    nom : ["", Validators.required],
    prenom : ["", Validators.required],
    adresse : ["", Validators.required],
    email : ["", Validators.email],
    tel : ["",  Validators.required]

  })

  public submit(){
    if (this.registerForm.value) {
      console.log(this.registerForm);
    }
    console.log(this.registerForm.value);
    
  }

  constructor(public fb : FormBuilder) { }



  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];



  ngOnInit(): void {

  }

}
