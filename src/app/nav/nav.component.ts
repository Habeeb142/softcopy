import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';
import { Router } from '@angular/router';

declare var $: any;


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  


  constructor(private sender: SenderService, public rout: Router) { }

  ngOnInit() {
    $(document).ready(function(){

      //scroll to services
      $('.service').click(()=> {
        $('html, body').animate({
          scrollTop: $('#expertise').offset().top
        },3000)
      });

      // scroll to conatact
      $('.contact').click(()=> {
        $('html, body').animate({
          scrollTop: $('#contact').offset().top
        },3000)
      });
      // end


      $('.home').css({'color': '#ff6c00'});
      $('.publishers').css({'color': '#ff6c00'});
      $('.about').css({'color': '#ff6c00'});
      $('.categories').css({'color': '#ff6c00'});
      $('.contact').css({'color': '#ff6c00'});

      $('.home-text').click(function(){
        $('.home').css({'color': '#ff6c00'});
        $('.publishers').css({'color': 'black'});
        $('.about-us').css({'color': 'black'});
        $('.categories').css({'color': 'black'});
        $('.contact').css({'color': 'black'});
        $('.home').addClass('bounce');
      })

      $('.publishers-text').click(function(){
        $('.home').css({'color': 'black'});
        $('.publishers').css({'color': '#ff6c00'});
        $('.about-us').css({'color': 'black'});
        $('.categories').css({'color': 'black'});
        $('.contact').css({'color': 'black'});
        $('.publishers').addClass('bounce');
      })
      $('.about-text').click(function(){
        $('.home').css({'color': 'black'});
        $('.publishers').css({'color': 'black'});
        $('.about').css({'color': '#ff6c00'});
        $('.categories').css({'color': 'black'});
        $('.contact').css({'color': 'black'});
        $('.about').addClass('bounce');
      })
      $('.service-text').click(function(){
        $('.service').css({'border-bottom': '1px solid white'});
        $('.service').addClass('bounce');
        $('.partners').css({'border-bottom': '0px'});
        $('.about').css({'border-bottom': '0px'});
        $('.home').css({'border-bottom': '0px'});
        $('.contact').css({'border-bottom': '0px'});
      })
      $('.contact-text').click(function(){
        $('.contact').css({'border-bottom': '1px solid white'});
        $('.contact').addClass('bounce');
        $('.partners').css({'border-bottom': '0px'});
        $('.about').css({'border-bottom': '0px'});
        $('.service').css({'border-bottom': '0px'});
        $('.home').css({'border-bottom': '0px'});
      })
    })
  }

  openModal(x) {
    //used to trigger a function in  from nav component
    this.sender.send(x);
  }
 
  fakeRouter(val) {alert(val)
    
        this.rout.navigate([`/soft-readers/${val}`]);
    
  }

}
