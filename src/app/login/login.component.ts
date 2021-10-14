import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  productForm: FormGroup;

  ngOnInit(): void {
    this.productForm = new FormGroup({
      emailAdress: new FormControl(null, [
        Validators.minLength(3),
      ]),
      password: new FormControl(null, [

        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]),
    });
  }

  submitProductForm(formValues) {
    console.log(formValues);
  }
}
