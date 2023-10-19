import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get<Contact[]>('http://localhost:3000/contacts');
  }
  addContact(data: Contact) {
    return this.http.post<Contact[]>('http://localhost:3000/contacts', data);
  }
  deleteContact(id: number) {
    return this.http.delete<Contact[]>('http://localhost:3000/contacts/' + id);
  }
  fetchDate(id: number) {
    return this.http.get<Contact[]>('http://localhost:3000/contacts/' + id);
  }
  updateContact(id: number, date: Contact) {
    return this.http.put<Contact[]>(
      'http://localhost:3000/contacts/' + id,
      date
    );
  }
}
