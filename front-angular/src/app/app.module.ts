import { UserService } from './logging/services/user.service';
import { ErrorInterceptor } from './logging/helpers/error.interceptor';
import { JwtInterceptor } from './logging/helpers/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { SelectAutocompleteModule } from 'mat-select-autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { LoggingComponent } from './logging/logging.component';
import { ProfileComponent } from './profile/profile.component';
import { FilterComponent } from './offers/filter/filter.component';
import { OfferPreviewComponent } from './offers/offer-preview/offer-preview.component';
import { OfferDetailComponent } from './offers/offer-detail/offer-detail.component';
import { RegisterFormComponent } from './logging/register-form/register-form.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { ApplicationComponent } from './profile/application/application.component';
import { NotificationComponent } from './profile/notification/notification.component';
import { OfferSquareComponent } from './profile/application/offer-square/offer-square.component';
import { OfferCompanyComponent } from './profile/application/offer-company/offer-company.component';
import { AlertComponent } from './alert/alert.component';

import { GlobalService } from './global.service';
import { OfferViewService } from './offers/offerView.service';
import { CompanyService } from './company.service';
import { NotificationsService } from './profile/notification/notifications.service';

import { FaqComponent } from './faq/faq.component';
import { AddOfferComponent } from './profile/application/offer-company/add-offer/add-offer.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
import { LOCALE_ID } from '@angular/core';
import { FaqQuestionComponent } from './faq/faq-question/faq-question.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { DetailCompanyComponent } from './entreprises/detail-company/detail-company.component';
import { AvisCompanyComponent } from './entreprises/avis-company/avis-company.component';
import { ProfileAdminComponent } from './admin/profile-admin/profile-admin.component';
import { AddCompanyComponent } from './entreprises/add-company/add-company.component';
import { OfferAdminComponent } from './admin/offer-admin/offer-admin.component';
import { ListCompanyComponent } from './entreprises/list-company/list-company.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OffersComponent,
    LoggingComponent,
    ProfileComponent,
    FilterComponent,
    OfferPreviewComponent,
    OfferDetailComponent,
    RegisterFormComponent,
    ProfileDetailComponent,
    ApplicationComponent,
    NotificationComponent,
    OfferSquareComponent,
    OfferCompanyComponent,
    AlertComponent,
    FaqComponent,
    AddOfferComponent,
    FaqQuestionComponent,
    EntreprisesComponent,
    DetailCompanyComponent,
    AvisCompanyComponent,
    ProfileAdminComponent,
    AddCompanyComponent,
    OfferAdminComponent,
    ListCompanyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatInputModule,
    MatSliderModule,
    SelectAutocompleteModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule
  ],
  exports: [OfferDetailComponent],
  providers: [GlobalService, OfferViewService, CompanyService, UserService, NotificationsService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
