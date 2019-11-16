import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../data-fetcher.service';
import { ServerService } from '../server.service';
import { TemporaryStorageService } from '../temporary-storage.service';
declare var $: any;

@Component({
  selector: 'app-first-book-slide',
  templateUrl: './first-book-slide.component.html',
  styleUrls: ['./first-book-slide.component.css']
})

export class FirstBookSlideComponent implements OnInit {
  constructor(private fetcher: DataFetcherService) { }
  public journal;
  public textbook = [];
  public thesis = [];
  public softReaders = [];
  public data = [];
  public data2 = [];
  public x = 1;
  ngOnInit() {
    //fetching info from where its being stored on collect from database so as not to hit database always, data already fetched from home component onload
    this.fetcher.getJournalData().subscribe(data => {
      this.Jholder(data);
      this.journal = data;
      //display for mobile of what we are doing on load
      for (let i = 3; i <= 6; i++) {
        this.data2.push(data[i]);
      }
    });
    //fetching textbook from temp storage
    this.fetcher.getTextBookData().subscribe(data => {
      this.textbook = data;
      //display for mobile of what we are doing on load
      for (let i = 3; i <= 6; i++) {
        this.data2.push(data[i]);
      }
    });
    //fetching thesis from temp storage
    this.fetcher.getThesisData().subscribe(data => {
      this.thesis = data;
      //display for mobile of what we are doing on load
      for (let i = 1; i <= 3; i++) {
        this.data2.push(data[i]);
      }
    });
    //fetching softreaders from temp storage
    this.fetcher.getSoftReaderData().subscribe(data => {
      this.softReaders = data;
    });
    $('.btn1').css({ 'background': 'whitesmoke', 'color': '#ff6c00' });
    $('.btn2').css({ 'background': '', 'color': '' });
    $('.btn4').css({ 'background': '', 'color': '' });
    $('.btn3').css({ 'background': '', 'color': '' });

    $('.a').click(function(){
      
        $('html, body').animate({
          scrollTop: $('.card').offset().top-300
        }, 1000)
    })
  }
  Jholder(x) {
    //setting array for first slide of findings and submissions
    for (let i = 0; i <= 12; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data.push(x[i]);
    }
  }
  Iholder() {
    //  setting array for first slide of findings and submissions
    // console.log(this.journal)
    for (let i = 2; i <= 4; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data.push(this.textbook[i]);
    }
    for (let i = 2; i <= 4; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data.push(this.journal[i]);
    }
    for (let i = 0; i <= 3; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data.push(this.thesis[i]);
    }
  }
  Wholder() {
    //  setting array for first slide of findings and submissions
    // console.log(this.journal)
    for (let i = 3; i <= 6; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data.push(this.journal[i]);
    }
    for (let i = 3; i <= 6; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data.push(this.textbook[i]);
    }
    for (let i = 1; i <= 3; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data.push(this.thesis[i]);
    }
  }
  WholderMobile() {
    for (let i = 3; i <= 6; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data2.push(this.journal[i]);
    }
    for (let i = 3; i <= 6; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data2.push(this.textbook[i]);
    }
    for (let i = 1; i <= 3; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data2.push(this.thesis[i]);
    }
  }
  Justholder() {
    //setting array for second slide of findings and submission
    for (let i = 0; i <= 3; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data.push(this.journal[i]);
    }
    for (let i = 0; i <= 3; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data.push(this.textbook[i]);
    }
    for (let i = 0; i <= 2; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data.push(this.thesis[i]);
    }
  }
  JustholderMobile() {
    //setting array for second slide of findings and submission
    for (let i = 0; i <= 3; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data2.push(this.journal[i]);
    }
    for (let i = 0; i <= 3; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data2.push(this.textbook[i]);
    }
    for (let i = 0; i <= 2; i++) {
      //pushing into a new array holder so as to have a maximum of 8 to display
      this.data2.push(this.thesis[i]);
    }
  }
  //onclick of findings and submission
  public finding() {
    $('.btn1').css({ 'background': 'whitesmoke', 'color': '#ff6c00' });
    $('.btn2').css({ 'background': '', 'color': '' });
    $('.btn4').css({ 'background': '', 'color': '' });
    $('.btn3').css({ 'background': '', 'color': '' });
    $('a').removeClass('bounce');
    $('a').addClass('bounce');
    this.data = [];
    this.Jholder(this.journal);
  }
  public irresistible() {
    this.data = [];
    $('.btn2').css({ 'background': 'whitesmoke', 'color': '#ff6c00' });
    $('.btn1').css({ 'background': '', 'color': '' });
    $('.btn4').css({ 'background': '', 'color': '' });
    $('.btn3').css({ 'background': '', 'color': '' });
    $('.card-body').removeClass('zoomIn');
    $('.card-body').addClass('zoomIn');
    $('a').removeClass('bounce');
    $('a').addClass('bounce');
    this.Iholder();
  }
  public what_we_are_doing(type) {
    console.log(type);
    $('.btn3').css({ 'background': 'whitesmoke', 'color': '#ff6c00' });
    $('.btn1').css({ 'background': '', 'color': '' });
    $('.btn4').css({ 'background': '', 'color': '' });
    $('.btn2').css({ 'background': '', 'color': '' });
    $('.card-body').removeClass('zoomIn');
    $('.card-body').addClass('zoomIn');
    if (type == 'desktop') {
      this.data = [];
      this.Wholder();
    }
    else {
      this.data2 = [];
      this.WholderMobile();
    }
  }
  public just_arrived(type) {
    $('.btn4').css({ 'background': 'whitesmoke', 'color': '#ff6c00' });
    $('.btn1').css({ 'background': '', 'color': '' });
    $('.btn3').css({ 'background': '', 'color': '' });
    $('.btn2').css({ 'background': '', 'color': '' });
    $('.card-body').removeClass('zoomIn');
    $('.card-body').addClass('zoomIn');
    $('a').removeClass('bunce');
    $('a').addClass('bounce');
    if (type == 'desktop') {
      this.data = [];
      this.Justholder();
    }
    else {
      this.data2 = [];
      this.JustholderMobile();
    }
}
 

}
