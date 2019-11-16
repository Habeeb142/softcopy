import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFetcherService } from '../data-fetcher.service';
import { SenderService } from '../sender.service';
declare var $: any

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {

  public query;
  public newData = [];
  public x; 
  public header;
  public q;
  
  constructor(private actRoute: ActivatedRoute, public fetch: DataFetcherService, private sender: SenderService) { }
  
  ngOnInit() {
    this.actRoute.paramMap.subscribe((params => {  
      
      this.query = this.actRoute.snapshot.params['q'];
      
    }))
    this.fetch.journalData().subscribe(data=>{
      // console.log(data)
      for (let i = 0; i < data.length; i++){
          if(data[i].department==this.query  && data[i].referal=='journal') {
            this.newData.push(data[i]);
          }
      }
      // console.log(this.newData)
    });

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
