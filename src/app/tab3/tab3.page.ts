import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController: AlertController) {}


async contactAlert() {
    const alert = await this.alertController.create({
      header: 'Your Message Has been sent.',
      subHeader: 'Viva La Crypto!',
      message: 'You will receive a response within 3-5 business days',
      buttons: ['submit']
    });
    await alert.present();
};
};