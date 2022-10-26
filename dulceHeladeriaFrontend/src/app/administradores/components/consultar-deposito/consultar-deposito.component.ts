import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deposito } from '../../interfaces/deposito';
import { DepositosService } from '../../services/depositos.service';

@Component({
  selector: 'app-consultar-deposito',
  templateUrl: './consultar-deposito.component.html',
  styleUrls: ['./consultar-deposito.component.css']
})
export class ConsultarDepositoComponent implements OnInit, OnDestroy {

  private sub: Subscription = new Subscription();
  depositos: Deposito[];
  constructor(private depositoService: DepositosService) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.consultarDepositos();
  }
  consultarDepositos(){
    this.sub.add(this.depositoService.getAll().subscribe({
      next: resp => {
        this.depositos = resp;
      },
      error: err => {
        console.log(err);
      }
    }));
  }
}
