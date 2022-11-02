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
  private currentDate : Date = new Date(); 
  private firstDate : Date = new Date();
  public myRange : range; 
  myStart : Date 
  myEnd : Date; 

  range = new FormGroup({
    start: new FormControl<Date>(this.firstDate),
    end: new FormControl<Date>(this.currentDate)
  });

  constructor(private rangeService : RangeService) {
    
    this.firstDate.setDate(this.currentDate.getDate() - 6);
    this.myRange = {start:this.firstDate , end: this.currentDate}
    this.rangeService.nextState(this.myRange);
   }

  ngOnInit(): void {
    
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
      this.myRange = {
        start : this.range.value.start,
        end: this.range.value.end
    }
    this.rangeService.nextState(this.myRange);

  }
}
