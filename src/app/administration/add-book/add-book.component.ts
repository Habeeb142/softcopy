import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private auth: AuthService, public rout: Router) { }

  ngOnInit() {
    (this.auth.checkAuth())? '' : this.rout.navigate(['admin'])
  }

}
