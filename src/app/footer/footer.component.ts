import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
hideValue=false;
  // social_links:string[];
names:string[];
content:string[];
  constructor() {
  // this.social_links=["Faceebook","Whatsapp","Twitter"]
this.names=[
  "facebook","whatsapp","twitter","unknowns"
];
this.content=["this is a paragraph and this will apear in the footer section as a paragraph"]
   }

  ngOnInit(): void {

  }
 alertMessage=function() {

  
}
}
