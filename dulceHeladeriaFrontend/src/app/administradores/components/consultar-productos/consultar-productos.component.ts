import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Producto } from '../../interfaces/producto';
import { productoResponse } from '../../interfaces/productoResponse';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-consultar-productos',
  templateUrl: './consultar-productos.component.html',
  styleUrls: ['./consultar-productos.component.css']
})
export class ConsultarProductosComponent implements OnInit, OnDestroy {

  productos: Producto[]=[];
  private sub: Subscription = new Subscription();
  constructor(private productoService: ProductosService, public router: Router) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.cargarProductos();
  }
  cargarProductos() {
    this.sub.add(
      this.productoService.getProductos().subscribe({
        next: (resp: productoResponse[]) => {
          resp.forEach((element) => {
            let prod: Producto = {
              id: element.id,
              nombre: element.name,
              precio: element.price,
              articulos: element.items.map((x) => {
                return { id: x.id, nombre: x.name, seleccionado: false };
              }),
              cantMaxArticulos: element.maxItemAmount,
            };
            this.productos.push(prod);
          });
        },
        error: (err) => {
          console.log(err.error);
        },
      })
    );
  }

  editarProducto(id: number){
    this.router.navigate([`${this.router.url}/${id}`]);
  }

}
