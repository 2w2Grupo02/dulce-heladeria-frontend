import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { range } from '../interfaces/range';

@Injectable({
  providedIn: 'root'
})
export class RangeService {
  private subject : Subject<range>
  
  constructor() {
    this.subject = new Subject<range>;
   }

  rangeEmit(){
    return this.subject.asObservable(); 
  }

  nextState(range: range){
    this.subject.next(range); 
    console.log("se agrego a el pipe")
  }
}
