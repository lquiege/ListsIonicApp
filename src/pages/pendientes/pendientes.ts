import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServicesDeseos } from '../../providers/services-deseos-service/services-deseos-service';
import { Lista } from '../../models/lista.model';
import { AgregarPage } from '../agregar/agregar';


@IonicPage()
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public deseos: ServicesDeseos, private alertCtrl: AlertController) {
     
   
  }


  agregarLista(){
    //this.navCtrl.push(AgregarPage);
   const alerta= this.alertCtrl.create({
      title: 'Nueva lista',
      message: 'Nombre de la nueva lista',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar'

      },{
        text: 'Agregar',
        handler: data=> {
          if (data.titulo.length===0){
            return;
          }
          this.navCtrl.push(AgregarPage, {
            titulo: data.titulo
          });
        }
      }]
    });
    alerta.present();
}



}


