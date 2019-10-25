import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  //x = book; y=tittle
  submitBook(x,z,y) {
    return this.http.post('/softcopy/backend/submitBook.php', {x,z,y});
  }

  submitContributor(x,y) {
    return this.http.post('/softcopy/backend/submitContributors.php',{x,y});
  }

  submitCover(x){
    return this.http.post('/softcopy/backend/submitPic.php',x);
  }

  submitFile(x){console.log(x);
    return this.http.post('/softcopy/backend/submitFile.php',x);
  }
}
