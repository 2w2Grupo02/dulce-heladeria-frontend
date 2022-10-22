import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte-venta',
  templateUrl: './reporte-venta.component.html',
  styleUrls: ['./reporte-venta.component.css']
})
export class ReporteVentaComponent implements OnInit {
  @Input() start: Date | null | undefined;
  @Input() end: Date | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
