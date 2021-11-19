import { Component, Injector, OnInit } from '@angular/core';
import { Reserva } from '../../../model/reserva';
import { ReservaService } from '../../../service/reserva.service';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  

  constructor( protected injector: Injector) { }

  ngOnInit() {
    //
  }
}
