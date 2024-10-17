import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XssTestComponent } from './xss-test.component';

describe('XssTestComponent', () => {
  let component: XssTestComponent;
  let fixture: ComponentFixture<XssTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XssTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XssTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
