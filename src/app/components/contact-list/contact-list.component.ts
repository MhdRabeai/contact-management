import { Component } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  contacts!: Contact[];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getContact();
  }
  getContact() {
    this.api.getContacts().subscribe((res) => {
      this.contacts = res;
    });
  }
  delete(id: any) {
    this.api.deleteContact(id).subscribe(() => {
      alert('Contact Deleted Successfully!!');
      setTimeout(() => {
        this.getContact();
      }, 1000);
    });
  }
  logout() {
    localStorage.removeItem('loginData');
  }
}
