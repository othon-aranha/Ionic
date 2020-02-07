import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) {

  }

  async toast(title: string, position: string): Promise<void> {
    const toast = await this.toastCtrl.create({ message: title,
    position: position === 'top' || position === 'bottom' || position === 'middle' ? position : 'top', duration: 3000 });
    toast.present();
  }

  async Alert(title: string, pmessage: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: pmessage,
      buttons: ['OK']
    });

    await alert.present();
  }
  async Confirm(ptitle: string, pmessage: string, callback: any) {
    const alert = await this.alertCtrl.create({
      header: ptitle,
      message: `Mensagem <strong>${pmessage}</strong>!!!`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            callback();
          }
        }
      ]
    });
}

}
