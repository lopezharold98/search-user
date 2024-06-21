import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:8090/api/clients'; 

  constructor(private http: HttpClient) { }

  getClientData(documentType: string, documentNumber: string): Observable<any> {
    const url = `${this.apiUrl}?documentType=${documentType}&documentNumber=${documentNumber}`;
    return this.http.get(url);
  }
}
