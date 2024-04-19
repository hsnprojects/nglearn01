import { Component } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})

export class MainBodyComponent {

  dynamicBody: string = "<div>test</div>";

  severalLines: number[] = [];

  public constructor() {
    for (let i = 0; i < 50; i++) {
      this.severalLines.push(i);
    }
  }

  // public constructor(){
  //   for(let i=0; i< 30; i++)
  //     this.dynamicBody += "TEST<BR>";
  // }

}