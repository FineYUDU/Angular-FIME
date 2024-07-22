import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloBidireccionalComponent } from './hello-bidireccional.component';

describe('HelloBidireccionalComponent', () => {
  let component: HelloBidireccionalComponent;
  let fixture: ComponentFixture<HelloBidireccionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloBidireccionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloBidireccionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
