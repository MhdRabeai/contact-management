import { Component, OnDestroy, OnInit } from '@angular/core';
import { contactUs } from 'src/app/model/contact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
})
export class AdminViewComponent implements OnInit {
  data!: contactUs[];
  isFetching = false;
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.isFetching=true;
    this.showContactus();
  }

  showContactus() {
    this.api.displayContactus().subscribe((res) => {
      this.isFetching=false;
      this.data = res;
    });
  }
  deleteQuery(id: number) {
    this.api.deleteQuery(id).subscribe(() => {
      alert('Query Has Been Deleted Successfully!!');
      this.showContactus();
    });
  }
  logout() {
    localStorage.removeItem('adminLogin');
  }
}
