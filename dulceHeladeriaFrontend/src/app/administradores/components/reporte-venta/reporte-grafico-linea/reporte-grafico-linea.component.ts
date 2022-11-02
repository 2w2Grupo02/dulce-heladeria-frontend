import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartOptions} from 'chart.js'
import { range } from 'src/app/administradores/interfaces/range';
import { RangeService } from 'src/app/administradores/services/range.service';
@Component({
  selector: 'app-reporte-grafico-linea',
  templateUrl: './reporte-grafico-linea.component.html',
  styleUrls: ['./reporte-grafico-linea.component.css']
})
export class ReporteGraficoLineaComponent implements OnInit {
  @ViewChild('input') input:HTMLInputElement;
  verPeriodoAnterior :boolean = false;
  cantDineroPorDia: number[]; 
  range: range; 
  dias: string[];
  datos: ChartData<'bar'>; 
  options: ChartOptions = {
    plugins: {
      title: {text:"nombre del chart", display:true, font:{size:30}}
    }
  }
  constructor(private rangeService:RangeService) { }

  ngOnInit(): void {
    this.rangeService.rangeEmit().subscribe({
      next: (range:range) => {
        this.range = range; 
        this.obtenerDias(range.start!,range.end!);
        this.datos = this.getOneChart();
      },
      error: () => {
        alert("error al cargar en rango en el grafico")
      }
    }); 
  }

  obtenerDias(start:Date, end:Date) {
    var dateArray = new Array();
    var currentDate:Date = start;
    while (currentDate <= end) {
        dateArray.push(new Date (currentDate));
        currentDate.setDate(currentDate.getDate()+1);
    }
    this.dias = dateArray.map((x:Date)=>`${x.toLocaleDateString()}`);
}

  cambiarCharts(){
    this.verPeriodoAnterior = !this.verPeriodoAnterior; 
    if(this.verPeriodoAnterior){
     this.datos = this.getTwoCharts();
    } else {
      this.datos = this.getOneChart();
    }
  }

  getOneChart(){
    return {
      labels : this.dias,
      datasets: [
        {
        data:[20,23,24],
        backgroundColor: '#4dc9f6',
        tension: 0.1,
        borderWidth: 3.5
        }
      ]
    }
  }

  getTwoCharts(){
    return {
      labels : this.dias,
      datasets: [
        {
        data:[20,30,25],
        backgroundColor: '#4dc9f6',
        borderWidth: 3.5
  
        },
        {
          data:[15,32,45],
          borderWidth: 3.5
        }
      ]
    }
  }

}
