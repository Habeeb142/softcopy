import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  journalOn() {
    $('.journal').css('display', 'block');
    $('.textbook').css('display', 'none');
  }

  textbookOn() {
    $('.journal').css('display', 'none');
    $('.textbook').css('display', 'book');
  }

}
