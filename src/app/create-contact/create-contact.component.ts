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
    if (this.registerForm.invalid) {
      console.log(this.registerForm);

    }else{
      let localContact = localStorage.getItem('listContact');

      if (localContact) {

        let listContact = JSON.parse(localContact);

        if (Array.isArray(listContact)) {

          let local = this.registerForm.value;
          local["id"] =listContact.length;

          listContact.push(this.registerForm.value)
          localStorage.setItem('listContact', JSON.stringify(listContact));

        }
        
      }else{
        let local = this.registerForm.value;
        local["id"] =0;
        localStorage.setItem('listContact', JSON.stringify([this.registerForm.value]));
      }
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
