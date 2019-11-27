import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
import { ModalLoginComponent } from './logging/modal-login/modal-login.component';
import { RegisterFormComponent } from './logging/register-form/register-form.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { ApplicationComponent } from './profile/application/application.component';
import { NotificationComponent } from './profile/notification/notification.component';
import { OfferSquareComponent } from './profile/application/offer-square/offer-square.component';
import { OfferCompanyComponent } from './profile/application/offer-company/offer-company.component';

import { GlobalService } from './global.service';
import { OfferViewService } from './offers/offerView.service';

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
    ModalLoginComponent,
    RegisterFormComponent,
    ProfileDetailComponent,
    ApplicationComponent,
    NotificationComponent,
    OfferSquareComponent,
    OfferCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GlobalService, OfferViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
