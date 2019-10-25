import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-fourth-slide',
  templateUrl: './fourth-slide.component.html',
  styleUrls: ['./fourth-slide.component.css']
})
export class FourthSlideComponent implements OnInit {

  constructor() { }
  public x;

  ngOnInit() {
  }
  arrow_right_findings3() {
    if(this.x==1) {
      $('.img6').css('display','inline');
      $('.img5').css('display','none');
      $('.img6').removeClass('slideInRight');
      $('.img6').addClass('slideInRight');
      this.x = 0;
    }

    else{
      $('.img5').css('display','inline');
      $('.img6').css('display','none');
      $('.img5').removeClass('slideInRight');
      $('.img5').addClass('slideInRight');
      this.x = 1;
    }
  }

  arrow_left_findings3() {
    if(this.x==1) {
      $('.img5').css('display','inline');
      $('.img6').css('display','none');
      $('.img5').removeClass('slideInLeft');
      $('.img5').addClass('slideInLeft');
      this.x = 0;
    }

    else {
      $('.img6').css('display','inline');
      $('.img5').css('display','none');
      $('.img6').removeClass('slideInLeft');
      $('.img6').addClass('slideInLeft');
      this.x = 1;
    }
  }

}
