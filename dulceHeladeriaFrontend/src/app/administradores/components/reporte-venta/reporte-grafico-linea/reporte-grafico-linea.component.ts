import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions} from 'chart.js'
@Component({
  selector: 'app-reporte-grafico-linea',
  templateUrl: './reporte-grafico-linea.component.html',
  styleUrls: ['./reporte-grafico-linea.component.css']
})
export class ReporteGraficoLineaComponent implements OnInit {
  datos: ChartData<'bar'> = {
    labels : ['ene','feb','marzo'],
    datasets: [
      {
      data:[20,30,25],
      label: "dia 1",
      backgroundColor: '#4dc9f6'

      },
      {
        data:[15,32,45],
        label: "dia 2"
        }
    ]
  }
  options: ChartOptions = {
    plugins: {
      title: {text:"nombre del chart", display:true, font:{size:30}}
    }
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
