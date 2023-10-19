import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss'],
})
export class UpdateContactComponent implements OnInit {
  public contactId: any;
  public contactData: Contact = {};
  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.contactId = param['id'];
    });
    this.api.fetchDate(this.contactId).subscribe((res: any) => {
      this.contactData = res;
    });
  }
  update() {
    this.api
      .updateContact(this.contactId, this.contactData)
      .subscribe((res: Contact[]) => {
        alert('Data Updated Successfully!!');
        this.router.navigate(['/contact-list']);
      });
  }
}
