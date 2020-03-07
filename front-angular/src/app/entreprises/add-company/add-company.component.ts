import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService, UserCompanyService } from 'src/app/logging/services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  isModalopen: boolean;
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private alertService: AlertService,
              private userCompanyService: UserCompanyService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      isStudent: [false],
      date_of_creation: ['', Validators.required],
      description: ['', Validators.required],
      taille: ['', Validators.required],
      location: ['', Validators.required],
      srcImage: [''],
      isPartner:[]
    });
  }

  openOrClose() {
    this.isModalopen = !this.isModalopen;
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value)
    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.loading = true;
    this.userCompanyService.registerByAdmin(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.openOrClose();
                // TODO rafraichir juste le composant
                window.location.reload();
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
      }

}
