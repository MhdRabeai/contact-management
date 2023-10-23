import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact, contactUs } from 'src/app/model/contact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  contacts!: Contact[];
  searchText!: any;
  msgForm!: FormGroup;
  constructor(private api: ApiService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.getContact();
    this.msgForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
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
  sendMsg(data: contactUs) {
    this.api.contactus(data).subscribe(() => {
      alert('Data Submitted Successfully!!');
      this.msgForm.reset();
    });
  }
}
