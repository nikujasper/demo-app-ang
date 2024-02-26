import { Component } from '@angular/core';
import { LinkMasterResponse, LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  target: any;
  constructor(private linkMasterService: LoginService) {}
  users!: LinkMasterResponse[];
  isLoading: boolean = false;
  // isLoading: any;

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
  // activeLink(event: any) {
  //   // event.target.classList.add('active');
  //   // console.log(event.target.classList);
  // }
}
