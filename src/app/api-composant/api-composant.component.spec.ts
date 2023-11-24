import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiComposantComponent } from './api-composant.component';

describe('ApiComposantComponent', () => {
  let component: ApiComposantComponent;
  let fixture: ComponentFixture<ApiComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiComposantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
