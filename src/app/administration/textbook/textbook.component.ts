import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TemporaryStorageService } from 'src/app/temporary-storage.service';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-textbook',
  templateUrl: './textbook.component.html',
  styleUrls: ['./textbook.component.css']
})
export class TextbookComponent implements OnInit {

  file_info: FormGroup;
  public formData;
  public file;
  public imgArray = [];
  authorImage: any;
  imgAuthor: FormData;
  coverImg: FormData;
  
  fileArr = [];
  pdfstatus: string;
  id: Object;
  public show;
  public color;
  public number_of_chapters;
  
  constructor(private server: ServerService,private formBuilder: FormBuilder, private temp: TemporaryStorageService, public rout: Router) { }
  public newChapter = [];
  
  public coverstatus;
  public epubstatus;
  public mp3status;
  public prcstatus;
  
  public chapter = {
    chapter: null,
    texbookId: null
  };
  public content = {
    format: null,
    epubformat: null,
    prcformat: null,
    mp3format: null
  }

  public book = {};

  ngOnInit() {
    this.number_of_chapters = this.newChapter.length;

    //setting avatar null onload
		this.file_info = this.formBuilder.group({
			author_image: [''],
			cover: [''],
			format: ['']
		 });
    
    //setting default contributo
    // this.number_of_contributors = this.chapterArr.length;
    $('.labelEditor').css('font-size','11px');
    $('.labelYear').css('font-size','11px');
    $('.labeltittle').css('font-size','11px');
    $('.labelvolume').css('font-size','11px');
    $('.labelnumber').css('font-size','11px');
    $('.labelcity').css('font-size','11px');
    $('.labelpublisher').css('font-size','11px');
    $('.labelisbn').css('font-size','11px');
    $('.labelnopage').css('font-size','11px');
    $('.labelprice').css('font-size','11px');
    $('.labelimage').css('font-size','11px');
    $('.labeldept').css('font-size','11px');
    $('.labelformat').css('font-size','11px');


  }

  submit(){
    //SUBMIT cover 
    this.server.submitCover(this.coverImg).subscribe(dataCover=>{
      //submit author image
      this.server.submitImgAuthor(this.imgAuthor).subscribe(dataImage=>{
        this.server.submitTextBook(this.book, this.cover, this.authorImage, this.fileArr).subscribe(data=>{
        console.log(data);
        //if(data==true){
          this.id = data;
          this.show = 'TextBook Details Submitted with TextBook Id: ' +data;
          this.temp.storeSubmitted(this.cover);
          // console.log(this.show)
          this.color = 'text-success';
          $('.form1').removeClass('d-block');
          $('.form1').addClass('d-none');
          $('.form2').removeClass('d-none');
          $('.form2').addClass('d-block');
       // }
      })
    })
  })
  }

  //accepting author image onchange
  image(event){
    this.file = event.target.files[0];
    this.authorImage = this.file.name;
    console.log(this.file);
    this.file_info.get('author_image').setValue(this.file);
    this.imgAuthor = new FormData();
    this.imgAuthor.append('author_image', this.file_info.get('author_image').value);
  }
  //accepting author image onchange
  cover(event){
    this.file = event.target.files[0];
    this.file_info.get('cover').setValue(this.file);
    this.cover = this.file.name;
    this.coverImg = new FormData();
    this.coverImg.append('cover', this.file_info.get('cover').value);
  }

  //accepting cover pdf onchange
  pdf(event){
    this.file = event.target.files[0];
    this.file_info.get('format').setValue(this.file);
    // console.log(this.file)
    if(this.file.type!=='application/pdf'){
      alert('PDF format is required');
      this.content.format = '';
    }
    else {
      this.fileArr.push(this.file.name, this.file.size, this.file.type);
      const formData2 = new FormData();
      formData2.append('format', this.file_info.get('format').value);
      //submitting file to service
      this.server.submitFile(formData2).subscribe(data=>{
        if(data==true){
          this.pdfstatus = "Successfully uploaded PDF File"
        }
        else {
          this.pdfstatus = "Unsuccessfully upload"
        }
      })
    }
  }
  
    //accepting epuc file onchange
    epuc(event){
      this.file = event.target.files[0];
      this.file_info.get('format').setValue(this.file);
      // console.log(this.file)
      if(this.file.type!=='application/epub+zip'){
        alert('EPUB format is required');
        this.content.epubformat = '';
      }
      else {
        this.fileArr.push(this.file.name,this.file.size, this.file.type);
        const formData2 = new FormData();
        formData2.append('format', this.file_info.get('format').value);
        //submitting file to service
        this.server.submitFile(formData2).subscribe(data=>{
          if(data==true){
            this.epubstatus = "Successfully uploaded EPUB File"
          }
          else {
            this.epubstatus = "Unsuccessfully upload"
          }
        })
      }
    }
    //accepting prc file onchange
    prc(event){
      this.file = event.target.files[0];
      this.file_info.get('format').setValue(this.file);
      // console.log(this.file)
      if(this.file.type!==''){
        alert('PRC format is required');
        this.content.prcformat = '';
  
      }
      else {
        this.fileArr.push(this.file.name,this.file.size, this.file.type);
        const formData2 = new FormData();
        formData2.append('format', this.file_info.get('format').value);
        //submitting file to service
        this.server.submitFile(formData2).subscribe(data=>{
          if(data==true){
            this.epubstatus = "Successfully uploaded PRC File"
          }
          else {
            this.epubstatus = "Unsuccessfully upload"
          }
        })
      }
    }
  
     //accepting epuc file onchange
     mp3(event){
      this.file = event.target.files[0];
      this.file_info.get('format').setValue(this.file);
      // console.log(this.file)
      if(this.file.type!=='audio/mp3'){
        alert('mp3 format is required');
        this.content.mp3format = '';
      }
      else {
        this.fileArr.push(this.file.name,this.file.size, this.file.type);
        const formData2 = new FormData();
        formData2.append('format', this.file_info.get('format').value);
        //submitting file to service
        this.server.submitFile(formData2).subscribe(data=>{
          if(data==true){
            this.mp3status = "Successfully uploaded mp3 File"
          }
          else {
            this.mp3status = "Unsuccessfully upload"
          }
        })
      }
    }


  resizeLabel(x) {

    switch (x) {
      // editor
      case 1: 
        $('.labelimage').css('font-size','11px');
        $('.labelEditor').css('font-size','8px');
        $('.labelYear').css('font-size','11px');
        $('.labeltittle').css('font-size','11px');
        $('.labelvolume').css('font-size','11px');
        $('.labelnumber').css('font-size','11px');
        $('.labelcity').css('font-size','11px');
        $('.labelpublisher').css('font-size','11px');
        $('.labelisbn').css('font-size','11px');
        $('.labelnopage').css('font-size','11px');
        $('.labelprice').css('font-size','11px');
        $('.labeldept').css('font-size','11px');
        $('.labelformat').css('font-size','11px');
        break;

        //year of publish
        case 2: 
        $('.labelEditor').css('font-size','11px');
        $('.labelYear').css('font-size','8px');
        $('.labeltittle').css('font-size','11px');
        $('.labelvolume').css('font-size','11px');
        $('.labelnumber').css('font-size','11px');
        $('.labelcity').css('font-size','11px');
        $('.labelpublisher').css('font-size','11px');
        $('.labelisbn').css('font-size','11px');
        $('.labelnopage').css('font-size','11px');
        $('.labelprice').css('font-size','11px');
        $('.labelimage').css('font-size','11px');
        $('.labeldept').css('font-size','11px');
        $('.labelformat').css('font-size','11px');
        break;

        // jOurnal Tittle
        case 3: 
        $('.labelEditor').css('font-size','11px');
        $('.labelYear').css('font-size','11px');
        $('.labeltittle').css('font-size','8px');
        $('.labelvolume').css('font-size','8px');
        $('.labelnumber').css('font-size','11px');
        $('.labelcity').css('font-size','11px');
        $('.labelpublisher').css('font-size','11px');
        $('.labelisbn').css('font-size','11px');
        $('.labelnopage').css('font-size','11px');
        $('.labelprice').css('font-size','11px');
        $('.labelimage').css('font-size','11px');
        $('.labeldept').css('font-size','11px');
        $('.labelformat').css('font-size','11px');
        break;

        // LAabel volume
        case 4: 
        $('.labelEditor').css('font-size','11px');
        $('.labelYear').css('font-size','11px');
        $('.labeltittle').css('font-size','11px');
        $('.labelvolume').css('font-size','8px');
        $('.labelnumber').css('font-size','11px');
        $('.labelcity').css('font-size','11px');
        $('.labelpublisher').css('font-size','11px');
        $('.labelisbn').css('font-size','11px');
        $('.labelnopage').css('font-size','11px');
        $('.labelprice').css('font-size','11px');
        $('.labelimage').css('font-size','11px');
        $('.labeldept').css('font-size','11px');
        $('.labelformat').css('font-size','11px');
        break;

        // LAabel No
        case 5: 
        $('.labelEditor').css('font-size','11px');
        $('.labelnopage').css('font-size','11px');
        $('.labelYear').css('font-size','11px');
        $('.labeltittle').css('font-size','11px');
        $('.labelvolume').css('font-size','11px');
        $('.labelnumber').css('font-size','8px');
        $('.labelcity').css('font-size','11px');
        $('.labelpublisher').css('font-size','11px');
        $('.labelisbn').css('font-size','11px');
        $('.labelprice').css('font-size','11px');
        $('.labelimage').css('font-size','11px');
        $('.labeldept').css('font-size','11px');
        $('.labelformat').css('font-size','11px');
        break;

        // LAabel city
        case 6: 
        $('.labelEditor').css('font-size','11px');
        $('.labelYear').css('font-size','11px');
        $('.labeltittle').css('font-size','11px');
        $('.labelvolume').css('font-size','11px');
        $('.labelnumber').css('font-size','11px');
        $('.labelpublisher').css('font-size','11px');
        $('.labelisbn').css('font-size','11px');
        $('.labelnopage').css('font-size','11px');
        $('.labelcity').css('font-size','8px');
        $('.labelprice').css('font-size','11px');
        $('.labelimage').css('font-size','11px');
        $('.labeldept').css('font-size','11px');
        $('.labelformat').css('font-size','11px');
        break;

        // LAabel publisher
        case 6: 
        $('.labelprice').css('font-size','11px');
        $('.labelEditor').css('font-size','11px');
        $('.labelYear').css('font-size','11px');
        $('.labeltittle').css('font-size','11px');
        $('.labelvolume').css('font-size','11px');
        $('.labelnumber').css('font-size','11px');
        $('.labelpublisher').css('font-size','8px');
        $('.labelcity').css('font-size','11px');
        $('.labelisbn').css('font-size','11px');
        $('.labelpage').css('font-size','11px');
        $('.labelimage').css('font-size','11px');
        $('.labeldept').css('font-size','11px');
        $('.labelformat').css('font-size','11px');
        break;

        // LAabel isbn
        case 7: 
        $('.labelEditor').css('font-size','11px');
        $('.labelYear').css('font-size','11px');
        $('.labeltittle').css('font-size','11px');
        $('.labelvolume').css('font-size','11px');
        $('.labelnumber').css('font-size','11px');
        $('.labelpublisher').css('font-size','11px');
        $('.labelisbn').css('font-size','8px');
        $('.labelcity').css('font-size','11px');
        $('.labelnopage').css('font-size','11px');
        $('.labelprice').css('font-size','11px');
        $('.labelimage').css('font-size','11px');
        $('.labeldept').css('font-size','11px');
        $('.labelformat').css('font-size','11px');
        break;

        // LAabel isbn
        case 8: 
        $('.labelEditor').css('font-size','11px');
        $('.labelYear').css('font-size','11px');
        $('.labeltittle').css('font-size','11px');
        $('.labelvolume').css('font-size','11px');
        $('.labelnumber').css('font-size','11px');
        $('.labelpublisher').css('font-size','11px');
        $('.labelisbn').css('font-size','11px');
        $('.labelcity').css('font-size','11px');
        $('.labelprice').css('font-size','11px');
        $('.labelnopage').css('font-size','8px');
        $('.labelimage').css('font-size','11px');
        $('.labeldept').css('font-size','11px');
        $('.labelformat').css('font-size','11px');
        break;

        // LAabel price
        case 9: 
        $('.labelEditor').css('font-size','11px');
        $('.labelYear').css('font-size','11px');
        $('.labeltittle').css('font-size','11px');
        $('.labelvolume').css('font-size','11px');
        $('.labelnumber').css('font-size','11px');
        $('.labelpublisher').css('font-size','11px');
        $('.labelisbn').css('font-size','11px');
        $('.labelcity').css('font-size','11px');
        $('.labelnopage').css('font-size','12px');
        $('.labelnoprice').css('font-size','8px');
        $('.labelimage').css('font-size','11px');
        $('.labeldept').css('font-size','11px');
        $('.labelformat').css('font-size','11px');
        break;

        // LAabel iamge
        case 9: 
        $('.labelEditor').css('font-size','11px');
        $('.labelYear').css('font-size','11px');
        $('.labeltittle').css('font-size','11px');
        $('.labelvolume').css('font-size','11px');
        $('.labelnumber').css('font-size','11px');
        $('.labelpublisher').css('font-size','11px');
        $('.labelisbn').css('font-size','11px');
        $('.labelcity').css('font-size','11px');
        $('.labelnopage').css('font-size','12px');
        $('.labelnoprice').css('font-size','11px');
        $('.labeldept').css('font-size','11px');
        $('.labelimage').css('font-size','8px');
        $('.labelformat').css('font-size','11px');
        break;

        // LAabel dept
        case 9: 
        $('.labelEditor').css('font-size','11px');
        $('.labelYear').css('font-size','11px');
        $('.labeltittle').css('font-size','11px');
        $('.labelvolume').css('font-size','11px');
        $('.labelnumber').css('font-size','11px');
        $('.labelpublisher').css('font-size','11px');
        $('.labelisbn').css('font-size','11px');
        $('.labelcity').css('font-size','11px');
        $('.labelnopage').css('font-size','12px');
        $('.labelnoprice').css('font-size','11px');
        $('.labeldept').css('font-size','8px');
        $('.labelimage').css('font-size','11px');
        $('.labelformat').css('font-size','11px');
        break;
        // LAabel format
        case 9: 
        $('.labelEditor').css('font-size','11px');
        $('.labelYear').css('font-size','11px');
        $('.labeltittle').css('font-size','11px');
        $('.labelvolume').css('font-size','11px');
        $('.labelnumber').css('font-size','11px');
        $('.labelpublisher').css('font-size','11px');
        $('.labelisbn').css('font-size','11px');
        $('.labelcity').css('font-size','11px');
        $('.labelnopage').css('font-size','12px');
        $('.labelnoprice').css('font-size','11px');
        $('.labeldept').css('font-size','11px');
        $('.labelimage').css('font-size','11px');
        $('.labelformat').css('font-size','8px');
        break;
      }
  }

  //verify id in contributor submission
idverify(event) {
  //show is equal to new id
  if(event.target.value == this.id){
    $('.input1').css('border', '1px solid green');
  }
  else{
    $('.input1').css('border', '2px solid red');
  }
}

newTittle() {
  // console.log(this.contributor);
  this.newChapter.push(this.chapter);
  // console.log(this.newChapter)
  this.server.submitChapter(this.chapter).subscribe(data=>{
    console.log(data);
    this.number_of_chapters = this.newChapter.length;
    this.chapter.chapter='';

    $('.input1').removeClass('d-block');
    $('.input1').addClass('d-none');
    $('.input2').removeClass('d-none');
    $('.input2').addClass('d-block');
  })
}

alldone() {
  this.rout.navigate(['success'])
}

}
