import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/logging/services';

@Component({
  selector: 'app-avis-company',
  templateUrl: './avis-company.component.html',
  styleUrls: ['./avis-company.component.scss']
})
export class AvisCompanyComponent implements OnInit {

  @Input() idCompany;
  avisForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
      this.avisForm = this.formBuilder.group({
          avis: ['', Validators.required]
      });
  }

  get f() { return this.avisForm.controls; }

  onSubmit() {
      this.submitted = true;
      this.alertService.clear();
      if (this.avisForm.invalid) {
          return;
      }
  }

}
