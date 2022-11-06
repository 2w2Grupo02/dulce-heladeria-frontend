import { Component, OnInit } from '@angular/core';
import { Articulos } from 'src/app/administradores/interfaces/articulos';
import { ArticulosService } from 'src/app/administradores/services/articulos.service';

@Component({
  selector: 'app-lista-movimientos',
  templateUrl: './lista-movimientos.component.html',
  styleUrls: ['./lista-movimientos.component.css']
})
export class ListaMovimientosComponent implements OnInit {

onChangeItem($event: Event) {
throw new Error('Method not implemented.');
}
movimientos: any
selectValue: any;
items: Articulos[];

  constructor(private articuloService: ArticulosService) { }

  ngOnInit(): void {
    this.getItems(); 
  }

  getItems(){
    this.articuloService.getAll().subscribe({
      next: (resp) => {
        this.items = resp; 
      }
    })
  }

}
