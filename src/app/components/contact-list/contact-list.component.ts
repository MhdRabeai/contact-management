import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contact, contactUs } from 'src/app/model/contact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],

})
export class ContactListComponent implements OnInit{
  displayedColumns: string[] = [
    'ID',
    'F.Name',
    'L.Name',
    'Phone',
    'City',
    'Action',

  ];
  contacts!: Contact[];
  searchText!: any;
  msgForm!: FormGroup;
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api: ApiService, private fb: FormBuilder) {

  }
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
      this.dataSource= new MatTableDataSource(this.contacts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate =  (data: Contact, filter: string) => {
        console.log(filter == data.id  );
        return !filter || filter == data.id;
      }

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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
}
}
