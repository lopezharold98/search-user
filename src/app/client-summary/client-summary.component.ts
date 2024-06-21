import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-summary',
  templateUrl: './client-summary.component.html',
  styleUrls: ['./client-summary.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ClientSummaryComponent {
  client: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.client = navigation?.extras.state;
  }

  goBack() {
    this.router.navigate(['/client-form']);
  }
}
