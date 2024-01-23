import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact, contactUs } from '../model/contact';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get<Contact[]>(
      'https://json-server-avob.onrender.com/contacts'
    );
  }
  addContact(data: Contact) {
    return this.http.post<Contact[]>(
      'https://json-server-avob.onrender.com/contacts',
      data
    );
  }
  deleteContact(id: number) {
    return this.http.delete<Contact[]>(
      'https://json-server-avob.onrender.com/contacts/' + id
    );
  }
  fetchDate(id: number) {
    return this.http.get<Contact[]>(
      'https://json-server-avob.onrender.com/contacts/' + id
    );
  }
  updateContact(id: number, date: Contact) {
    return this.http.put<Contact[]>(
      'https://json-server-avob.onrender.com/contacts/' + id,
      date
    );
  }
  // contactus
  contactus(data: contactUs) {
    return this.http.post<contactUs[]>(
      'https://json-server-avob.onrender.com/contactUs',
      data
    );
  }
  // Get Contact; Us;
  displayContactus() {
    return this.http.get<contactUs[]>(
      'https://json-server-avob.onrender.com/contactUs'
    );
  }
  deleteQuery(id: number) {
    return this.http.delete<contactUs>(
      'https://json-server-avob.onrender.com/contactUs/' + id
    );
  }
}


