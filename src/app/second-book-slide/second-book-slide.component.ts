import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-second-book-slide',
  templateUrl: './second-book-slide.component.html',
  styleUrls: ['./second-book-slide.component.css']
})
export class SecondBookSlideComponent implements OnInit {
  public x;
  constructor() { }

   ngOnInit() {
  }


  arrow_right_findings2() {
    if(this.x==1) {
      $('.img4').css('display','inline');
      $('.img3').css('display','none');
      $('.img4').removeClass('slideInRight');
      $('.img4').addClass('slideInRight');
      this.x = 0;
    }

    else{
      $('.img3').css('display','inline');
      $('.img4').css('display','none');
      $('.img3').removeClass('slideInRight');
      $('.img3').addClass('slideInRight');
      this.x = 1;
    }
  }

  arrow_left_findings2() {
    if(this.x==1) {
      $('.img3').css('display','inline');
      $('.img4').css('display','none');
      $('.img3').removeClass('slideInLeft');
      $('.img3').addClass('slideInLeft');
      this.x = 0;
    }

    else {
      $('.img4').css('display','inline');
      $('.img3').css('display','none');
      $('.img4').removeClass('slideInLeft');
      $('.img4').addClass('slideInLeft');
      this.x = 1;
    }
  }

}

