import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UbicacionArticulo } from '../../interfaces/ubicacion-articulo';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-consultar-ubicaciones-articulo',
  templateUrl: './consultar-ubicaciones-articulo.component.html',
  styleUrls: ['./consultar-ubicaciones-articulo.component.css'],
})
export class ConsultarUbicacionesArticuloComponent
  implements OnInit, OnDestroy
{
  ubicacionesArticulo: UbicacionArticulo[];
  private sub: Subscription = new Subscription();
  constructor(
    private articuloService: ArticulosService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.consultarUbicaciones();
  }

  consultarUbicaciones() {
    this.sub.add(
      this.activatedRoute.params.subscribe({
        next: (params) => {
          const id = params['id'];
          this.articuloService.getUbicacionesArticulo(id).subscribe({
            next: (resp) => {
              console.log(resp);
              this.ubicacionesArticulo = resp;
            },
            error: (err) => {
              console.log(err);
            },
          });
        },
        error: (err) => {},
      })
    );
  }
}
