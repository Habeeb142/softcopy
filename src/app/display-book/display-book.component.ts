import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFetcherService } from '../data-fetcher.service';
import { SenderService } from '../sender.service';

declare var $: any;

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {

  public incoming;
  data: any;
  d: any;
  data2: any;
  public x; 
  public header;
  public q;
  abstract: Object;
  journal: boolean = false;
  textbook: boolean = false;
  thesis: boolean =  false;
  softReader: boolean =  false;
  toggleVal: boolean = true;
  public similar = []

  constructor(public actRout: ActivatedRoute, private fetcher: DataFetcherService, private sender: SenderService) { }

  ngOnInit() {
    this.actRout.paramMap.subscribe((param => {
      this.incoming = {
        type: this.actRout.snapshot.params['type'],
        id: this.actRout.snapshot.params['id'],
        format: this.actRout.snapshot.params['format']
      }
    }));

    //data fetcher
    this.sweetDataFetcher();

    //checking for subscription
    this.checker()
  }

  //fetching data from database using incoming
  sweetDataFetcher() {
    //fetch d specific data
    this.fetcher.specificBookData(this.incoming).subscribe(data=>{
      // console.log(data)
      this.d = data;
      this.data = data[0];
      
    })

    //check all relvant data
    if(this.incoming.type=='journal'){
      //using line 57 to toggle line 57 on .html
      this.journal = true;
      this.fetcher.journalData().subscribe(data=>{
        for (let index = 0; index < 4; index++) {
          this.similar.push(data[index]);
        }
      })
    }

    //textbook
    else if(this.incoming.type=='textbook'){
      //using line 57 to toggle line 57 on .html
      this.textbook = true;
      this.fetcher.textbookData().subscribe(data=>{
        for (let index = 0; index < 4; index++) {
          this.similar.push(data[index]);
        }
      })
    }

    //thesis
    else if(this.incoming.type=='thesis'){
      //using line 57 to toggle line 57 on .html
      this.thesis = true;
      this.fetcher.thesisData().subscribe(data=>{
        for (let index = 0; index < 4; index++) {
          this.similar.push(data[index]);
        }
      })
    }

    //softreader
    else if(this.incoming.type=='softreader'){
      //using line 57 to toggle line 57 on .html
      this.softReader = true;
      this.fetcher.softData().subscribe(data=>{
        for (let index = 0; index < 4; index++) {
          this.similar.push(data[index]);
        }
      })
    }
  }

  //toggler used for journal contribution toggle display
  toggle(x) {
    if(this.toggleVal == false){
      $('#'+x).css('display','none');
      this.toggleVal = true;
    }
    else {
      $('#'+x).css('display','block');
      this.toggleVal = false
    }
  }
  // end of toggler

  checker(): void {
    if(this.sender.subscription == undefined){
      this.sender.subscription = this.sender.triggerClientData.subscribe(()=>{
          //call the function u wish to call
          this.openModal();
      })
    }
  }

  //data triggered from nav component
  openModal() {
    //get the paramitized index from service to know which to open it modal
    this.x = this.sender.hold();
    switch(this.x) {
      case 1: this.header = 'Journals & Proceedings'; this.q = 'journals';
      break;
      case 2: this.header = 'Textbooks'; this.q = 'textbooks';
      break;
      case 3: this.header = 'Thesis & Dissertations'; this.q = 'my-thesis';
      break;
    }
    $('#modal').modal('toggle');
  }
}
