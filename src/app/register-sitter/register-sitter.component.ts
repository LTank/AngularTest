import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-register-sitter',
  templateUrl: './register-sitter.component.html',
  styleUrls: ['./register-sitter.component.scss']
})
export class RegisterSitterComponent implements OnInit {

  sitterForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.sitterForm = this.fb.group({

      name: ["",[Validators.required, Validators.minLength(3)]],
      gender: ["",Validators.required],
      birthDate: ["",Validators.required],
      address: ["",Validators.required],
      zipCode: ["",Validators.required, Validators.minLength(4)],
      city: ["",Validators.required]
    })
  }

  onSubmit(sitterForm){
    if(sitterForm.valid){
       // Send request to back-end to validate login.
    } else {
      // promt user for not filling out fields.
    }
    console.log(sitterForm);
  }

}
