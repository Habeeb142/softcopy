import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { DataFetcherService } from '../data-fetcher.service';
import { TemporaryStorageService } from '../temporary-storage.service';
import { SenderService } from '../sender.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private srver: ServerService, private fetcher: DataFetcherService, private store: TemporaryStorageService, private sender: SenderService) { }
  public x; 
  public header;; 
  public q;


  ngOnInit() {
    //onload fetch all data
    this.fetcher.journalData().subscribe(data=>{})
    this.fetcher.textbookData().subscribe(data=>{})
    this.fetcher.thesisData().subscribe(data=>{})
    this.fetcher.softData().subscribe(data=>{})
    // end

    //display loader
    $('.loader').css('display', 'block');
    setTimeout(() => {
      $('.content').css('display', 'block');
      $('.loader').css('display', 'none');
    }, 5000);

    this.checker()
  }

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