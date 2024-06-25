import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="not-found-container">
      <h1>Error 404: Not Found</h1>
      <p>El usuario que intentas buscar no existe.</p>
      <button (click)="goBack()">Volver</button>
    </div>
  `,
  styles: [
    `
      .not-found-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }

      button {
        margin-top: 20px;
        padding: 10px 20px;
        cursor: pointer;
      }
    `
  ]
})
export class NotFoundComponent {

  constructor() {}

  goBack(): void {
    window.history.back();
  }
}
