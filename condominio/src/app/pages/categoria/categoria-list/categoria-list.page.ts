import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.page.html',
  styleUrls: ['./categoria-list.page.scss'],
})
export class CategoriaListPage implements OnInit {
  itemsChecked: number;
  public form = [
    { val: 'Eletrodomésticos', isChecked: true },
    { val: 'Eletroeletrônicos', isChecked: false },
    { val: 'Celulares e Tablets', isChecked: false }
  ];

  constructor(private route: Router) { }

  ngOnInit() {
    this.getItemsChecked();
  }

  getItemsChecked(): void {
    let checkedItems = 0;
    for (const iterator of this.form) {
      if ( iterator.isChecked ) {
         checkedItems++;
      }
      this.itemsChecked = checkedItems;
    }
  }

  marcaDesmarca(item: any) {
    for (const iterator of this.form) {
      if ( iterator.val === item.val ) {
        iterator.isChecked = ! ( iterator.isChecked);
      }
    }
    this.getItemsChecked();
  }

  retornar(): void {
    this.route.navigate(['tabs']);
  }

}
