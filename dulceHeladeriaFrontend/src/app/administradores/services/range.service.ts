import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { range } from '../interfaces/range';

@Injectable({
  providedIn: 'root',
})
export class RangeService {
  private subject: Subject<range>;
  private Behaviorsub: BehaviorSubject<range>;

  constructor() {
    let startDate = new Date();
    startDate.setDate(startDate.getDate() - 15);
    let range = { start: startDate, end: new Date() };
    this.subject = new Subject<range>();
    this.Behaviorsub = new BehaviorSubject(range as range);
  }

  rangeEmit() {
    return this.Behaviorsub.asObservable();
  }

  nextState(range: range) {
    this.Behaviorsub.next(range);
  }
}
