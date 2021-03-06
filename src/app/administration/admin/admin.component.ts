import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private auth: AuthService, public rout: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.rout.navigate(['admin']);
  }

}
