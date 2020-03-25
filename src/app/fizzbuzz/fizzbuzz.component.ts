import { Component, OnInit } from '@angular/core';

import { FizzbuzzService } from '../fizzbuzz.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {
  buzz : string[];
  constructor(
    private fizzservice : FizzbuzzService
  ) { }

  ngOnInit(): void {
    this.fizzservice.getFizz(36).subscribe((res:Response) => this.buzz= res['out']);
  }
}
