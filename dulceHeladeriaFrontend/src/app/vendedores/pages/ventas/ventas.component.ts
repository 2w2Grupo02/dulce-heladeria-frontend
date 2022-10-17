import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { dtoNuevaVenta } from '../../interfaces/dtoVenta';
import { NuevaVentaService } from '../../services/nueva-venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventas: dtoNuevaVenta;
  private subscription = new Subscription();

  constructor(
    private ventaService: NuevaVentaService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscription.add(
      this.ventaService.obtenerVentaRealizada().subscribe({
        next: (respuesta: dtoNuevaVenta[]) => {
          alert('exito')
        },
        error: () => {
          alert('error al obtener las marcas');
        },
      })
    );
  }

  guardar() {
    this.subscription.add(
      this.ventaService.registrarVenta(this.ventas).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: () => {
          alert('error al guardar la venta');
        }
      })
    );
  }
}
