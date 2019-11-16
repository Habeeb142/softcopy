import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../data-fetcher.service';
declare var $: any

@Component({
  selector: 'app-fourth-slide',
  templateUrl: './fourth-slide.component.html',
  styleUrls: ['./fourth-slide.component.css']
})
export class FourthSlideComponent implements OnInit {

  constructor(private fetcher: DataFetcherService) { }
  public data = [];

  ngOnInit() {
    this.fetcher.getThesisData().subscribe(data=>{
      this.data = data;
     })

      $('.__a').click(function(){
      $('html, body').animate({
        scrollTop: $('.card').offset().top+1350
      }, 1000)
    })
  }


}
