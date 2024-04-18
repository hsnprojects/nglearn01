import { Component } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent {

  dynamicBody: string = "<div>test</div>";

  // public constructor(){
  //   for(let i=0; i< 30; i++)
  //     this.dynamicBody += "TEST<BR>";
  // }

}