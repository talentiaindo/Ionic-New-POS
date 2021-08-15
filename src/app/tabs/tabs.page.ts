import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private auth: AuthService,
    private route: Router) { }

  ngOnInit() {
    let result;
    this.auth.checkUser().then(res => {
      result = res;
      if (result) {

      }
      else {
        this.route.navigate(['/login'])
      }
    });
  }

  logOut() {
    this.auth.logout();
  }
}
