import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
declare var $: any;

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent implements OnInit {

  constructor(public rout: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.rout.navigate(['admin']);
  }

  journalOn() {
    $('.journal').css('display', 'block');
    $('.textbook').css('display', 'none');
    $('.soft-readers').css('display', 'none');
    $('.thesis').css('display', 'none');
  }

  textbookOn() {
    $('.journal').css('display', 'none');
    $('.textbook').css('display', 'block');
    $('.soft-readers').css('display', 'none');
    $('.thesis').css('display', 'none');
  }

  thesisOn() {
    $('.journal').css('display', 'none');
    $('.soft-readers').css('display', 'none');
    $('.textbook').css('display', 'none');
    $('.thesis').css('display', 'block');
  }

  softReaders() {
    $('.journal').css('display', 'none');
    $('.textbook').css('display', 'none');
    $('.thesis').css('display', 'none');
    $('.soft-readers').css('display', 'block');
  }

}
