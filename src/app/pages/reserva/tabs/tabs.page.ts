import { Component, Injector, OnInit } from '@angular/core';
import { Reserva } from '../../../model/reserva';
import { ReservaService } from '../../../service/reserva.service';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  
  numReservas: number;
  reservas:  Reserva[];
  reservaService: ReservaService;
  constructor( protected injector: Injector) { }

  ngOnInit() {
    this.numReservas = 0;
    this.reservaService = new ReservaService(this.injector);
    // Carregando os dominios do acesso
    this.reservas = [];
    this.reservaService.getAll()
    .subscribe(
      (resource) => {
        this.reservas = resource;
        this.numReservas = this.reservas.length;
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
  }
}
