import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferAdminPreviewComponent } from './offer-admin-preview.component';

describe('OfferAdminPreviewComponent', () => {
  let component: OfferAdminPreviewComponent;
  let fixture: ComponentFixture<OfferAdminPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferAdminPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferAdminPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
