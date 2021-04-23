import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'app/services/api';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  const apiServiceStub = {
    // Empty
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ApiService, useValue: apiServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
