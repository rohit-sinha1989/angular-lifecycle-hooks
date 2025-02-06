import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLifecycleHooksComponent } from './app-lifecycle-hooks.component';

describe('AppLifecycleHooksComponent', () => {
  let component: AppLifecycleHooksComponent;
  let fixture: ComponentFixture<AppLifecycleHooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppLifecycleHooksComponent]
    });
    fixture = TestBed.createComponent(AppLifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
