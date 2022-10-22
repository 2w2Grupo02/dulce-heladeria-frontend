import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Subject } from 'rxjs';
import { range } from '../../interfaces/range';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  public myRange : range; 
  private subject : Subject<range>
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
    this.myRange = {
      start : this.range.value.start,
      end: this.range.value.end
    }
    
  }

  

}
