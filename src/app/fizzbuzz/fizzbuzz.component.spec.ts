import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzbuzzComponent } from './fizzbuzz.component';
import {By} from '@angular/platform-browser';
import {FizzbuzzService} from '../fizzbuzz.service';
import { Observable, of } from 'rxjs';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

/* */ 
describe('FizzbuzzComponent', () => {   
  const ans = "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, 31, 32, Fizz, 34, Buzz, Fizz".split(", ");

  let component: FizzbuzzComponent;
  let fixture: ComponentFixture<FizzbuzzComponent>;

  let mockApi = {
    getFizz(n: number):Observable<any>{
      var r = {"out" :ans};
      return of(r);
    }
  }

  let mockLogin = {
    logged() : boolean{
      return true;
    }
  }

  let mockRouter = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FizzbuzzComponent ],
      // use the mock api instead of the http request
      // commenting out the code will test whether or not the api returns the correct answer
      providers: [
        {
          provide: FizzbuzzService, useValue: mockApi
        },
        {
          provide: LoginService, useValue: mockLogin
        },
        {
          provide: Router, useValue: mockRouter
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzbuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  // test if getFizz is called correctly by viewing the output 
  it('getFizz should be called correctly', () => {
    const items = fixture.debugElement.queryAll(By.css("li"));
    for(let i = 0; i < 36; i++){
      expect(items[i].nativeNode.innerHTML).toBe(ans[i]);
    }
  });
});
