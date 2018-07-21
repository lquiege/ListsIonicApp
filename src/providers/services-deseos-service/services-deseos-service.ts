
import { Injectable } from '@angular/core';
import { Lista } from '../../models/lista.model';


@Injectable()
export class ServicesDeseos {

  listas: Lista[] = [];

  constructor() {
    this.loadStorage();


  }

  addList ( lista: Lista) {
    this.listas.push(lista);
    this.saveStorage();
  }

  deleteList(lista: Lista){
      this.listas=this.listas.filter(listData=>{
        return listData.id!= lista.id
      });
      this.saveStorage();
  }

  saveStorage (){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  loadStorage() {
    if(localStorage.getItem('data')) {
      this.listas=JSON.parse(localStorage.getItem('data'));
    }
    else this.listas=[];
  }

}
