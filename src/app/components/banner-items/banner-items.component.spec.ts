import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerItemsComponent } from './banner-items.component';

describe('BannerItemsComponent', () => {
  let component: BannerItemsComponent;
  let fixture: ComponentFixture<BannerItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerItemsComponent]
    });
    fixture = TestBed.createComponent(BannerItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
