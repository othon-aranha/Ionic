import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  abrirProduto(): void {
    this.route.navigate(['tabs']);
  }
}
