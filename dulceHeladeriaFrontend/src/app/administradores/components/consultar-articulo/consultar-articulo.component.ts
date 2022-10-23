import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ArticulosService } from '../../services/articulos.service';
import { Articulos } from '../../interfaces/articulos';

@Component({
  selector: 'app-consultar-articulo',
  templateUrl: './consultar-articulo.component.html',
  styleUrls: ['./consultar-articulo.component.css']
})
export class ConsultarArticuloComponent implements OnInit, OnDestroy {

  private sub: Subscription = new Subscription();
  articulos: Articulos[];
  constructor(private articuloService: ArticulosService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.consultarArticulos();
  }
  consultarArticulos() {
    this.sub.add(this.articuloService.getAll().subscribe({
      next: resp => {
        console.log(resp);
        this.articulos = resp;
      },
      error: err => {
        console.log(err);
      }
    }));
  }

}
