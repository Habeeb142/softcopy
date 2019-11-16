import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';

declare var $: any;

@Component({
  selector: 'app-soft-reader',
  templateUrl: './soft-reader.component.html',
  styleUrls: ['./soft-reader.component.css']
})
export class SoftReaderComponent implements OnInit {

  public x; 
  public header;
  public q;

  constructor(private sender: SenderService) { }

  ngOnInit() {
     //checking for subscription
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