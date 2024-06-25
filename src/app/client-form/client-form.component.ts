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
      documentNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]*$')
        ]
      ]
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      const { documentType, documentNumber } = this.clientForm.value;
      this.clientService.getClientData(documentType, documentNumber).subscribe(
        response => {
          if (response) {
            this.router.navigate(['/client-summary'], { state: response });
          }
        },
        error => {
          console.error('Error fetching client data', error);
          this.router.navigate(['/not-found']);
        }
      );
    }
  }
}
