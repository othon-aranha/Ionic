import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.page.html',
  styleUrls: ['./meus-pedidos.page.scss'],
})
export class MeusPedidosPage implements OnInit {
  public checkedItems = 0;
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];
  constructor(private route: Router) { }

  contarItensMarcados(): void {
    this.form.forEach(element => {
      if (element.isChecked) {
        this.checkedItems = ++this.checkedItems;
      }
    });
  }

  ngOnInit() {
    this.contarItensMarcados();
  }

  retornar(): void {
    this.route.navigate(['']);
  }

}
