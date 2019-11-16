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
  submitImgAuthor(x){
    return this.http.post('/softcopy/backend/submitTextBookImage.php',x);
  }

  submitFile(x){
    return this.http.post('/softcopy/backend/submitFile.php',x);
  }

  submitChapter(x){
    return this.http.post('/softcopy/backend/submitTextBookChapter.php',x);
  }

  submitTextBook(x, y, z, w){
    return this.http.post('/softcopy/backend/submitTextBook.php', {x,y,z,w});
  }

  submitThesis(x, y, z) {
    return this.http.post('/softcopy/backend/submitThesis.php', {x, y, z});
  }

  submitSoftReader(x, y, z, w) {
    return this.http.post('/softcopy/backend/submitSoftReaders.php', {x, y, z, w});
  }

}
