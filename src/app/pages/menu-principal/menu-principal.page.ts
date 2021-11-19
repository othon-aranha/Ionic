import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonNav } from '@ionic/angular';


export interface MenuItem {
  title: string;
  color?: string;
  route?: string;
  icon: string;
}

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {
  @ViewChild(IonNav, {static: true}) nav: IonNav;

  appMenuItems: Array<MenuItem>;

  accountMenuItems: Array<MenuItem>;

  loginMenuItems: Array<MenuItem>;

  helpMenuItems: Array<MenuItem>;
  constructor(private menu: MenuController, private route: Router) { }

  ngOnInit() {

   this.appMenuItems = [
        {title: 'Condomínio', color: 'light', route: 'condominios', icon: 'business-outline'},
        {title: 'Local', color: 'light',  route: 'locais', /* component: null, */ icon: 'card-outline'},
        {title: 'Unidade', color: 'light',  route: 'unidade', /* component: null, */ icon: 'home-outline'},
        {title: 'Reserva', color: 'light',  route: 'reservas', /* component: null, */ icon: 'attach-outline'},
        {title: 'Sair', color: 'light',  route: '', /* component: null, */ icon: 'exit-outline'}
    ];
    

   this.accountMenuItems = [
        {title: 'My Account', /* component: null, */ icon: 'ios-contact'},
        {title: 'Logout', /* component: null, */ icon: 'log-out'},
    ];

   this.loginMenuItems = [
        {title: 'Login', /* component: null, */ icon: 'ios-contact'}
    ];

   this.helpMenuItems = [
        {title: 'Welcome', /* component: null, */ icon: 'bookmark'},
        {title: 'About', /* component: null, */ icon: 'information-circle'},
    ];
  }

  openMenu(): void {
    this.menu.open();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.route.navigate([page.route]);
}

  tribunalPage(): void {
    this.route.navigate(['menu-principal']);
  }

}
