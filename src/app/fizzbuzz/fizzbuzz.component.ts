import { Component, OnInit } from '@angular/core';

import { FizzbuzzService } from '../fizzbuzz.service';
import { HttpClient} from '@angular/common/http';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {
  buzz : string[];
  constructor(
    private fizzservice : FizzbuzzService,
    private loginService : LoginService,
    private router : Router
  ) { }

  ngOnInit(): void {
    if (this.loginService.logged()){
      this.fizzservice.getFizz(36).subscribe((res:Response) => this.buzz= res['out']);
    }
    else{
      window.alert("Not logged in!");
      this.router.navigate(['login']);
    }
  }
}
