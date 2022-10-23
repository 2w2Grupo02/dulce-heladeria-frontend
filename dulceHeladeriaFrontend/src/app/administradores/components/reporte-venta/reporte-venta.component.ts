import { Component, Input, OnInit } from '@angular/core';
import { range } from '../../interfaces/range';
import { RangeService } from '../../services/range.service';

@Component({
  selector: 'app-reporte-venta',
  templateUrl: './reporte-venta.component.html',
  styleUrls: ['./reporte-venta.component.css']
})
export class ReporteVentaComponent implements OnInit {
  @Input() start: Date | null | undefined;
  @Input() end: Date | null | undefined;

  total:number = 1000; 
  date:range; 

  constructor(private rangeService:RangeService) { }

  ngOnInit(): void {
    this.rangeService.rangeEmit()
    .subscribe({
      next: (resp:range) => {
        this.date = resp
        console.log("desde reporte de ventas : " + this.date.start + " " + this.date.end)
      },
      error: () => {alert("error al recibir el rango de fechas")}
    }); 
  }

}