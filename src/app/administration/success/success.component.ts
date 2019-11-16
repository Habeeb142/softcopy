import { Component, OnInit } from '@angular/core';
import { TemporaryStorageService } from 'src/app/temporary-storage.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  public data;
  constructor(private fetch: TemporaryStorageService) { }

  ngOnInit() {
    this.data = this.fetch.getData()
  }
 
}
