import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  file_info: FormGroup;
  public fileArr=[];
  public show;
  public citation_abstract;
  public citation;
  public id;
  public book = {
   
  }

  public coverstatus;
  public pdfstatus;
  public epubstatus;
  public mp3status;
  public prcstatus;
  public content = {
    format: null,
    epubformat: null,
    prcformat: null,
    mp3format: null
  }

  public contributor = {
    tittle: null,
    abstract: null,
    citation_abstract: null,
    format:  null
  }

  public file;
  public status;
  public chapterArr = [];
  public number_of_contributors;
  public color;
  public formData;
  public arrForContributoFile = [];

  constructor(private server: ServerService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.show = 'Journal Detail not yet submited';
    this.color = 'text-danger';
    //setting default contributo
    this.number_of_contributors = this.chapterArr.length;
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

    //setting avatar null onload
		this.file_info = this.formBuilder.group({
			format: [''],
			cover: ['']
		 });
  }
  //submitting journal details
  submit(){
    // console.log(this.fileArr);
      // console.log(dataUserPic);
      this.server.submitCover(this.formData).subscribe(dataUserPic=>{
        this.server.submitBook(this.book,this.fileArr, this.file.name).subscribe(data=>{
        console.log(data)
        this.id = data;
        this.show = 'Journal Detail Submitted with Journal Id: ' +data;
        this.color = 'text-success';
        $('.form1').removeClass('d-block');
        $('.form1').addClass('d-none');
        $('.form2').removeClass('d-none');
        $('.form2').addClass('d-block');
      })
  })

  }
  //accepting cover picture onchange
  showFile(event){
    this.file = event.target.files[0];
    this.file_info.get('cover').setValue(this.file);
    this.formData = new FormData();
    this.formData.append('cover', this.file_info.get('cover').value);
        //then on submit of the form, the image is submitted to cover folder
  }

  //accepting cover pdf onchange
  pdf(event){
    this.file = event.target.files[0];
    this.file_info.get('format').setValue(this.file);
    console.log(this.file)
    if(this.file.type!=='application/pdf'){
      alert('PDF format is required');
      this.content.format = '';
    }
    else {
      this.fileArr.push(this.file.name,this.file.size);
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
      this.fileArr.push(this.file.name,this.file.size);
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
    console.log(this.file)
    if(this.file.type!=='application/pdf'){
      alert('PRC format is required');
      this.content.prcformat = '';

    }
    else {
      this.fileArr.push(this.file.name,this.file.size);
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
      this.fileArr.push(this.file.name,this.file.size);
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

  contributorCitationAbstractFile(event) {
    this.file = event.target.files[0];
    this.arrForContributoFile.push(this.file.name,this.file.size);
    this.file_info.get('format').setValue(this.file);
    this.formData = new FormData();
    this.formData.append('format', this.file_info.get('format').value);
    //submitting file to service
    this.server.submitFile(this.formData).subscribe(data=>{
      if(data==true){
        this.citation_abstract = "Successfully uploaded File"
      }
      else {
        this.citation_abstract = "Unsuccessfully upload"
      }
    })
  }

  contributorCitationFile(event){
    this.file = event.target.files[0];
    this.arrForContributoFile.push(this.file.name,this.file.size);
    this.file_info.get('format').setValue(this.file);
    this.formData = new FormData();
    this.formData.append('format', this.file_info.get('format').value);
    //submitting file to service
    this.server.submitFile(this.formData).subscribe(data=>{
      if(data==true){
        this.citation = "Successfully uploaded File"
      }
      else {
        this.citation = "Unsuccessfully upload"
      }
    })
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


  newTittle() {
    // console.log(this.contributor);
    this.chapterArr.push(this.contributor);
    // console.log(this.chapterArr)
    this.server.submitContributor(this.contributor, this.arrForContributoFile).subscribe(data=>{
      console.log(data);
      this.number_of_contributors = this.chapterArr.length;
      this.contributor.tittle='';
      this.contributor.citation_abstract='';
      this.contributor.format='';
      $('.input1').removeClass('d-block');
      $('.input1').addClass('d-none');
      $('.input2').removeClass('d-none');
      $('.input2').addClass('d-block');
     
    })
  }
}


