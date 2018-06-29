import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgoraDemoComponent } from './agora-demo.component';

describe('AgoraDemoComponent', () => {
  let component: AgoraDemoComponent;
  let fixture: ComponentFixture<AgoraDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgoraDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgoraDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
