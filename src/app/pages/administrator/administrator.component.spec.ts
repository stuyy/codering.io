import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorComponent } from './administrator.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthGuard } from 'src/app/guards/auth.guard';

describe('AdministratorComponent', () => {
  let component: AdministratorComponent;
  let fixture: ComponentFixture<AdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorComponent, HttpClientTestingModule],
      providers: [AuthGuard]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
