import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.productForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('')],
      ],
      emailAdress: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)],
      ],
      userName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern(/^\S*$/)],
      ],
      addresses: this.fb.array([]),
      password: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        )],
      ],
      confirmPassword: [
        '',
        [Validators.required],
      ]
    });
  }

  get productFormControls() {
    return this.productForm.controls;
  }

  get addressesList(): FormArray {
    return this.productForm.get('addresses') as FormArray;
  }
  newAddress(): FormGroup {
    return this.fb.group({
      address: '',
      city: '',
      street: '',
      country: '',
    });
  }
  addAddress() {
    this.addressesList.push(this.newAddress());
  }
  submitProductForm(formValues: any) {
    console.log(formValues);
  }

  submitReactiveForm() {
    console.log(this.productForm);
  }
}
