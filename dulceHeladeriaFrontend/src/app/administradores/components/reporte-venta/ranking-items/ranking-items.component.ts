import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { range } from 'src/app/administradores/interfaces/range';
import { RankItem } from 'src/app/administradores/interfaces/RankItem';
import { RangeService } from 'src/app/administradores/services/range.service';
import { VentaService } from 'src/app/administradores/services/venta.service';

@Component({
  selector: 'app-ranking-items',
  templateUrl: './ranking-items.component.html',
  styleUrls: ['./ranking-items.component.css']
})
export class RankingItemsComponent implements OnInit {
  dataSource: RankItem[];
  
  constructor(
    private saleService : VentaService,
    private range:RangeService
    ) { }

  ngOnInit(): void {
    this.range.rangeEmit().subscribe({
      next : (resp:range) => {
        this.saleService.getRanking(resp.start!,resp.end!).subscribe({
          next: (resp : RankItem[]) => {
            this.dataSource = resp; 
          },
          error : () => {
            alert("error al obtener el ranking de ventas"); 
          }
        })
      }, 
      error : () => {alert("error al obtener el rango de fechas")}
    })
  }

}

