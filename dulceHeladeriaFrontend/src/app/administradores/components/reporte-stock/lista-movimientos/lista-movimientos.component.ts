import { Component, OnInit } from '@angular/core';
import { Articulos } from 'src/app/administradores/interfaces/articulos';
import { ArticulosService } from 'src/app/administradores/services/articulos.service';
import { MovimientosService } from 'src/app/administradores/services/movimientos.service';
import { RangeService } from 'src/app/administradores/services/range.service';

@Component({
  selector: 'app-lista-movimientos',
  templateUrl: './lista-movimientos.component.html',
  styleUrls: ['./lista-movimientos.component.css']
})
export class ListaMovimientosComponent implements OnInit {


movimientos: any
selectValue: any;
items: Articulos[];

  constructor(private movimientoServie: MovimientosService,
    private articuloService: ArticulosService,
     private rangeService: RangeService) { }

  ngOnInit(): void {
    this.getItems(); 
  }

  rangeSub(){
    this.rangeService.rangeEmit().subscribe(
      //next: () => {} 
    )
  }

  onChangeItem($event: Event) {
    throw new Error('Method not implemented.');
    }

  getItems(){
    this.articuloService.getAll().subscribe({
      next: (resp) => {
        this.items = resp; 
        console.log(resp); 
        console.log(this.items);
      }
    })
  }

  getMovimientos(){
    this.movimientoServie.getMovimietos().subscribe({});
  }

}
