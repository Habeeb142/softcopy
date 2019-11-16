import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFetcherService } from '../data-fetcher.service';
import { SenderService } from '../sender.service';
declare var $: any;
@Component({
  selector: 'app-my-thesis',
  templateUrl: './my-thesis.component.html',
  styleUrls: ['./my-thesis.component.css']
})
export class MyThesisComponent implements OnInit {

  public query;
  public newData = [];
  public faker:any;
  public x; 
  public header;
  public q;

  constructor(public actRout: ActivatedRoute, private fetch: DataFetcherService, private sender: SenderService) { }

  ngOnInit() {

    this.actRout.paramMap.subscribe((param => {
      this.query = this.actRout.snapshot.params['q'];
    }));

    this.fetch.thesisData().subscribe(data=>{
      this.faker = data;
      for (let i = 0; i < this.faker.length; i++){
          if(this.faker[i].department==this.query  && this.faker[i].referal=='thesis') {
            this.newData.push(this.faker[i]);
          }
      }
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


