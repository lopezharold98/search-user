import { TestBed, async } from '@angular/core/testing';
import { ClientFormComponent } from './client-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

describe('ClientFormComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientFormComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule 
      ],
      providers: [
        
      ]
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ClientFormComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
