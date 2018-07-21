import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesDeseos } from '../../providers/services-deseos-service/services-deseos-service';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';
import { PendientesPage } from '../pendientes/pendientes';



@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

    lista: Lista;
    nombreItem: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public deseos: ServicesDeseos) {
    const titulo = this.navParams.get('titulo');
    if(this.navParams.get('lista')){
      this.lista=this.navParams.get('lista');
    }
    else {
      this.lista=new Lista(titulo);
      this.deseos.addList(this.lista);

    }
  }

  agregarItem(){
    if (this.nombreItem.length===0) {return;}
     
      const newItem = new ListaItem(this.nombreItem);
      this.lista.items.push(newItem);

      this.nombreItem='';
      this.deseos.saveStorage();
      this.deseos.loadStorage();
  }

  actualizarTarea(item: ListaItem){
    item.completado= !item.completado;
    const pendientes = this.lista.items.filter(itemData=> !itemData.completado).length;
    if (pendientes === 0 ){
      this.lista.terminada=true;
      this.lista.fechaFinalizacion=new Date();
    }
    else {
      this.lista.terminada=false;
      this.lista.fechaFinalizacion=null
    }
    this.deseos.saveStorage();
    this.deseos.loadStorage();
  }

  delete (idx: number){
    this.lista.items.splice(idx,1);
    if(this.lista.items.length!=0){
    
      this.deseos.saveStorage();
    }
    else {this.deseos.deleteList(this.lista)
        this.navCtrl.pop();
    }
  }

}


