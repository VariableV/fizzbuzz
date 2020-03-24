import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {
  buzz : string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.generateFizz(36);
  }

  generateFizz(n : number): void{
    for(let i = 1; i <= n; i++){
      let str = "";
      if (i % 3 == 0){
        str += "Fizz";
      }
      if (i % 5 == 0){
        str += "Buzz";
      }
      if (str.length == 0){
        str = ""+i;
      }
      this.buzz.push(str);
    }
  }

}
