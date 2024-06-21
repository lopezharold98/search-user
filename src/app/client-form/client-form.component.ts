import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ClientFormComponent {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private clientService: ClientService) {
    this.clientForm = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      const { documentType, documentNumber } = this.clientForm.value;
      this.clientService.getClientData(documentType, documentNumber).subscribe(
        response => {
          if(response){
            console.log(response)
            this.router.navigate(['/client-summary'], { state: response });
          }
          
        },
        error => {
          if (error.status === 404) { 
            this.router.navigate(['/not-found']);
          }
        }
      );
    }
  }
}
