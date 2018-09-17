import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-register-baby',
  templateUrl: './register-baby.component.html',
  styleUrls: ['./register-baby.component.scss']
})
export class RegisterBabyComponent implements OnInit {
  babyForm: any;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.babyForm = this.fb.group({
  
      name: ["",[Validators.required, Validators.minLength(3)]],
      gender: ["",Validators.required],
      birthDate: ["",Validators.required],
      address: ["",Validators.required],
      zipCode: ["",Validators.required, Validators.minLength(4)],
      city: ["",Validators.required]
    })
  }


  onSubmit(babyForm) {
    
    if (babyForm.valid) {
      // Send request to back-end to validate login.
    } else {
      // promt user for not filling out fields.
    }

    console.log(babyForm);
  }
}
