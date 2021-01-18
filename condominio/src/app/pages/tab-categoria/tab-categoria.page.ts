import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tab-categoria',
  templateUrl: './tab-categoria.page.html',
  styleUrls: ['./tab-categoria.page.scss'],
})
export class TabCategoriaPage implements OnInit {

  constructor(private route: Router,  private location: Location) { }

  ngOnInit() {

  }

  voltar(): void {
    this.location.back();
  }

  retornar(): void {
    this.route.navigate(['tabs']);
  }
}
