import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/logging/services';
import { AvisService } from '../avis.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-avis-company',
  templateUrl: './avis-company.component.html',
  styleUrls: ['./avis-company.component.scss']
})
export class AvisCompanyComponent implements OnInit {

  // TODO : seul un étudiant connecté peut déposer un avis
  @Input() idCompany;
  avisForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private avisService: AvisService
  ) {}

  ngOnInit() {
      this.avisForm = this.formBuilder.group({
          avis: ['', Validators.required]
      });
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.avisForm.controls; }

  onSubmit() {
      this.submitted = true;
      this.alertService.clear();
      if (this.avisForm.invalid) {
          return;
      }

      this.avisService.add(this.f.avis.value, this.idCompany)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
