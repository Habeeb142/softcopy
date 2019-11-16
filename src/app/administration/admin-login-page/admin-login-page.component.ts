import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
declare var $: any;

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {

  warning: string;
  err: string;

  constructor(public rout: Router, private auth: AuthService) { }
  public admin = {username:null, pwd: null}

  ngOnInit() {
    // $('.card').css('display', 'block');
    if(this.auth.checkAuth()){
      $('.card').css('display', 'none');
       //display loader
      $('.loader').css('display', 'block');
      //admin setting auth
      this.auth.setAuth();

      setTimeout(() => {
        this.rout.navigate(['journal']);
      }, 5000);
    }
    
  }

  

  loginAdmin() { 
    if(this.admin.username == 'softcopy' && this.admin.pwd == 'SERVER.soft') {
      $('.card').css('display', 'none');
       //display loader
      $('.loader').css('display', 'block');
      //admin setting auth
      this.auth.setAuth();

      setTimeout(() => {
        this.rout.navigate(['journal']);
      }, 5000);

    }

    else {
      this.warning = 'bg-warning';
      this.err = 'Login Error';
    }
  }

}
