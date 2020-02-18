import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.page.html',
  styleUrls: ['./minha-conta.page.scss'],
})
export class MinhaContaPage implements OnInit {

  constructor(private route: Router) {}


  ngOnInit() { }

  retornar(): void {
    this.route.navigate(['tabs']);
  }

}
