import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../data-fetcher.service';
declare var $: any;

@Component({
  selector: 'app-second-book-slide',
  templateUrl: './second-book-slide.component.html',
  styleUrls: ['./second-book-slide.component.css']
})
export class SecondBookSlideComponent implements OnInit {
  public data = [];
  
  constructor(private fetcher: DataFetcherService) { }

   ngOnInit() {
         //fetching softreaders from temp storage
    this.fetcher.getSoftReaderData().subscribe(data=>{
     this.data = data;
    })
    
    $('._a').click(function(){
      $('html, body').animate({
        scrollTop: $('.card').offset().top+180
      }, 1000)
   })

  }


}

