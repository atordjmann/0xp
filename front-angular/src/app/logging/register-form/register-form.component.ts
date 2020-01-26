import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService, UserService, AlertService } from '../services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  isStudent: boolean;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private alertService: AlertService
  ) {
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.isStudent = true;
      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        name: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        dateBirth: ['', Validators.required],
        contactMail: [''],
        contactTel: [''],
        localisation: ['', Validators.required],
        softSkills: [''],
        interestCompany: [''],
        interestDomain: [''],
        isStudent: [true]
      });
    }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  registerStudent = (e) => {
    this.isStudent = true;
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dateBirth: ['', Validators.required],
      contactMail: [''],
      contactTel: [''],
      localisation: ['', Validators.required],
      softSkills: [''],
      interestCompany: [''],
      interestDomain: [''],
      isStudent: [true]
    });
  }

  registerCompany = (e) => {
    this.isStudent = false;
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isStudent: [false],
      creationDate: ['', Validators.required],
      description: ['', Validators.required],
      taille: ['', Validators.required],
      localisation: ['', Validators.required]
    });
  }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.loading = true;
      if (this.isStudent) {
        this.userService.registerStudent(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
      } else {
        this.userService.registerCompany(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
      }
  }
}
