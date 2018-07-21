import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ItemSliding } from 'ionic-angular';
import { ServicesDeseos } from '../providers/services-deseos-service/services-deseos-service';
import { Lista } from '../models';
import { AgregarPage } from '../pages/agregar/agregar';


@Component({
  selector: 'app-lists',
  templateUrl: 'lists.component.html',
})
export class ListsComponent {

@Input() completed: boolean=false;

  constructor(public deseos: ServicesDeseos, private navCtrl: NavController, private alertCtrl: AlertController) {
  }

  listaSeleccionada(lista: Lista){
    this.navCtrl.push(AgregarPage, {
      titulo: lista.titulo,
      lista: lista
        });
    }
  
    deleteList(lista: Lista){
        this.deseos.deleteList(lista);
      }

    editList(lista: Lista, slidingItem: ItemSliding){

        slidingItem.close();
       const alerta= this.alertCtrl.create({
          title: 'Editar',
          message: 'Editar nombre de la lista',
          inputs: [{
            name: 'titulo',
            placeholder: 'Nombre de la lista',
            value: lista.titulo
          }],
          buttons: [{
            text: 'Cancelar'
      
          },{
            text: 'Actualizar',
            handler: data=> {
              if (data.titulo.length===0){
                return;
              }
              lista.titulo = data.titulo;
              this.deseos.saveStorage();
              
            }
          }]
        });
        alerta.present();
      }
      

}
