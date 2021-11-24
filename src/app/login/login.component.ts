import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  rform!: FormGroup;
  email: any;
  password: any;
  isSubmit!: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.isSubmit = false;
  }

  ngOnInit(): void {
    this.rform = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    this.isSubmit = true;

    // stop here if form is invalid
    if (
      this.rform.value.email == 'a.jegathesh1999@gmail.com' &&
      this.rform.value.password == 'Jega23@'
    ) {
      alert('valid user');

      this.router.navigate(['/welcome']);
    } else {
      alert('Invalid user');
    }
  }
}
