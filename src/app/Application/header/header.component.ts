import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  logout() {
    sessionStorage.removeItem('access_token');
    this.router.navigateByUrl('/');
  }
}
