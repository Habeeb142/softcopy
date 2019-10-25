import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-first-book-slide',
  templateUrl: './first-book-slide.component.html',
  styleUrls: ['./first-book-slide.component.css']
})
export class FirstBookSlideComponent implements OnInit {

  constructor() { }
  public x = 1;

  ngOnInit() {
    $('#irresistible').css('display', 'none');
    $('#what_we_are_doing').css('display', 'none');
    $('#just_arrived').css('display', 'none');
    $('#findings').css('display', 'block');
    $('#findings').addClass('zoomIn');
    $('#btn1').css({'background':'whitesmoke', 'color':'#ff6c00'});
    $('#btn2').css({'background':'', 'color':''});
    $('#btn4').css({'background':'', 'color':''});
    $('#btn3').css({'background':'', 'color':''});
     // mobile
    $('#btnMobile1').css({'background':'whitesmoke', 'color':'#ff6c00'});
    $('#findingsMobile').css({'display':'inline-block'});
    $('#irresistibleMobile').css({'display':'none'});
    $('#btnMobile2').css({'background':'', 'color':''});
    $('#btnMobile3').css({'background':'', 'color':''});
    $('#findingsMobile').addClass('zoomIn');
    $('#btnMobile4').css({'background':'', 'color':''});
    $('#btnMobile3').css({'background':'whitesmoke', 'color':'#ff6c00'});

  }

  public finding(): void {
      $('#irresistible').css('display', 'none');
      $('#what_we_are_doing').css('display', 'none');
      $('#just_arrived').css('display', 'none');
      $('#findings').css({'display':'block'});
      $('#btn1').css({'background':'whitesmoke', 'color':'#ff6c00'});
      $('#btn2').css({'background':'', 'color':''});
      $('#btn4').css({'background':'', 'color':''});
      $('#btn3').css({'background':'', 'color':''});
      $('#findings').removeClass('zoomIn');
      $('#just_arrived').removeClass('zoomIn');
      $('#irresistible').removeClass('zoomIn');
      $('#what_we_are_doing').removeClass('zoomIn');
      $('#findings').addClass('zoomIn');
  }

  public irresistible(): void {
    $('#findings').css('display', 'none');
      $('#what_we_are_doing').css('display', 'none');
      $('#just_arrived').css('display', 'none');
      $('#irresistible').css('display', 'block');
      $('#btn2').css({'background':'whitesmoke', 'color':'#ff6c00'});
      $('#btn1').css({'background':'', 'color':''});
      $('#btn4').css({'background':'', 'color':''});
      $('#btn3').css({'background':'', 'color':''});
      $('#irresistible').removeClass('zoomIn');
      $('#findings').removeClass('zoomIn');
      $('#just_arrived').removeClass('zoomIn');
      $('#what_we_are_doing').removeClass('zoomIn');
      $('#irresistible').addClass('zoomIn');
  }

  public what_we_are_doing() : void {
      $('#findings').css('display', 'none');
      $('#irresistible').css('display', 'none');
      $('#just_arrived').css('display', 'none');
      $('#what_we_are_doing').css('display', 'block');
      $('#what_we_are_doing').removeClass('zoomIn');
      $('#findings').removeClass('zoomIn');
      $('#just_arrived').removeClass('zoomIn');
      $('#irresistible').removeClass('zoomIn');
      $('#what_we_are_doing').addClass('zoomIn');
      $('#btn3').css({'background':'whitesmoke', 'color':'#ff6c00'});
      $('#btn2').css({'background':'', 'color':''});
      $('#btn4').css({'background':'', 'color':''});
      $('#btn1').css({'background':'', 'color':''});
  }

  public just_arrived() {
      $('#findings').css('display', 'none');
      $('#irresistible').css('display', 'none');
      $('#what_we_are_doing').css('display', 'none');
      $('#just_arrived').css('display', 'block');
      $('#just_arrived').removeClass('zoomIn');
      $('#findings').removeClass('zoomIn');
      $('#what_we_are_doing').removeClass('zoomIn');
      $('#irresistible').removeClass('zoomIn');
      $('#just_arrived').addClass('zoomIn');
      $('#btn4').css({'background':'whitesmoke', 'color':'#ff6c00'});
      $('#btn2').css({'background':'', 'color':''});
      $('#btn1').css({'background':'', 'color':''});
      $('#btn3').css({'background':'', 'color':''});
  }

  
  arrow_right_findings() {
    if(this.x==1) {
      $('.img2').css('display','inline');
      $('.img1').css('display','none');
      $('.img2').removeClass('slideInRight');
      $('.img2').addClass('slideInRight');
      this.x = 0;
    }

    else{
      $('.img1').css('display','inline');
      $('.img2').css('display','none');
      $('.img1').removeClass('slideInRight');
      $('.img1').addClass('slideInRight');
      this.x = 1;
    }
  }

  arrow_left_findings() {
    if(this.x==1) {
      $('.img1').css('display','inline');
      $('.img2').css('display','none');
      $('.img1').removeClass('slideInLeft');
      $('.img1').addClass('slideInLeft');
      this.x = 0;
    }

    else {
      $('.img2').css('display','inline');
      $('.img1').css('display','none');
      $('.img2').removeClass('slideInLeft');
      $('.img2').addClass('slideInLeft');
      this.x = 1;
    }
  }

  // mobile
  findingMobile(): void {
    $('#btnMobile1').css({'background':'whitesmoke', 'color':'#ff6c00'});
    $('#findingsMobile').css({'display':'inline-block'});
    $('#irresistibleMobile').css({'display':'none'});
    $('#btnMobile2').css({'background':'', 'color':''});
    $('#btnMobile3').css({'background':'', 'color':''});
    $('#btnMobile4').css({'background':'', 'color':''});
    $('#findingsMobile').removeClass('fadeIn');
    $('#findingsMobile').addClass('fadeIn');
  }

  irresistibleMobile() {
    $('#btnMobile2').css({'background':'whitesmoke', 'color':'#ff6c00'});
    $('#findingsMobile').css({'display':'none'});
    $('#irresistibleMobile').css({'display':'inline-block'});
    $('#btnMobile1').css({'background':'', 'color':''});
    $('#btnMobile3').css({'background':'', 'color':''});
    $('#btnMobile4').css({'background':'', 'color':''});
    $('#irresistibleMobile').removeClass('fadeIn');
    $('#irresistibleMobile').addClass('fadeIn');
  }

  what_we_are_doingMobile() {
    $('#btnMobile3').css({'background':'whitesmoke', 'color':'#ff6c00'});
    $('#just_arrivedMobile').css({'display':'none'});
    $('#what_we_are_doingMobile').css({'display':'inline-block'});
    $('#btnMobile1').css({'background':'', 'color':''});
    $('#btnMobile2').css({'background':'', 'color':''});
    $('#btnMobile4').css({'background':'', 'color':''});
    $('#what_we_are_doingMobile').removeClass('fadeIn');
    $('#what_we_are_doingMobile').addClass('fadeIn');
  }

  just_arrivedMobile() {
    $('#btnMobile4').css({'background':'whitesmoke', 'color':'#ff6c00'});
    $('#just_arrivedMobile').css({'display':'inline-block'});
    $('#what_we_are_doingMobile').css({'display':'none'});
    $('#btnMobile1').css({'background':'', 'color':''});
    $('#btnMobile2').css({'background':'', 'color':''});
    $('#btnMobile3').css({'background':'', 'color':''});
    $('#just_arrivedMobile').removeClass('fadeIn');
    $('#just_arrivedMobile').addClass('fadeIn');
  }

}

