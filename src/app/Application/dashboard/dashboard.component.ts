import { Component } from '@angular/core';
import { LinkMasterResponse, LoginService } from '../../Services/login.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private linkMasterService: LoginService) {}
  users!: LinkMasterResponse[];
  isLoading: boolean = false;

  ngOnInit() {
    this.getLinkMaster();
  }
  getLinkMaster() {
    this.isLoading = true;

    this.linkMasterService.linkMaster().subscribe((res: any) => {
      this.users = res;
      this.isLoading = false;
    });
  }
}
