import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService
  ) {}
  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
    });
    const alertPlaceholder = document.getElementById(
      'liveAlertPlaceholder'
    ) as HTMLTextAreaElement;
    const appendAlert = (message: any, type: any) => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
      ].join('');

      alertPlaceholder.append(wrapper);
    };

    const alertTrigger = document.getElementById('liveAlertBtn');
    if (alertTrigger) {
      alertTrigger.addEventListener('click', () => {
        appendAlert('Contact Added Successfully!!', 'success');
      });
    }
  }
  onSubmit(data: Contact) {
    this.api.addContact(data).subscribe(() => {
      this.myForm.reset();
      setTimeout(() => {
        this.router.navigate(['/contact-list']);
      }, 1000);
    });
  }
}
