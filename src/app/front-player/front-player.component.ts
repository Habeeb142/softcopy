import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';
declare var $: any;

@Component({
  selector: 'app-front-player',
  templateUrl: './front-player.component.html',
  styleUrls: ['./front-player.component.css']
})
export class FrontPlayerComponent implements OnInit {

  constructor(private sender: SenderService) { }
  
  public x; 
  public header;; 
  
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
      case 1: this.header = 'Journals & Proceedings';
      break;
      case 2: this.header = 'Textbooks';
      break;
      case 3: this.header = 'Thesis & Dissertations';
      break;
    }
    $('#modal').modal('toggle');
  }

}
