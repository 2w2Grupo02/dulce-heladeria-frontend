import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

import { range } from '../../interfaces/range';
import { RangeService } from '../../services/range.service';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  private date : Date = new Date; 
  public myRange : range; 

  range = new FormGroup({
    start: new FormControl<Date>(this.date),
    end: new FormControl<Date>(this.date)
  });
  constructor(private rangeService : RangeService) { }

  ngOnInit(): void {

  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
         this.myRange = {
      start : this.range.value.start,
      end: this.range.value.end
    }
    console.log(this.myRange)
    this.rangeService.nextState(this.myRange);

  }



}
