import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ClienteProvider, ClienteLista } from '../../providers/cliente/cliente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  clientes:ClienteLista[];

  constructor(
    public navCtrl: NavController,
    private clienteProvider: ClienteProvider,
    private toast: ToastController
  
  ) {

  }


  ionViewDidEnter() {
    this.clienteProvider.getAll()
    .then((results)=>{
      this.clientes = results;
      
    })
  }


  addCliente(){
    this.navCtrl.push('EditarClientePage');
  }

  editCliente(item: ClienteLista){
    this.navCtrl.push('EditarClientePage', {key:item.key, cliente: item.cliente} );
  }

  removeCliente(item: ClienteLista){
    this.clienteProvider.remove(item.key)
    .then(() => { 

      let index = this.clientes.indexOf(item);
      this.clientes.splice(index, 1);
      
      this.toast.create({
        message:'Cliente Removido',
        duration:3000,
        position: 'botton'
    }).present();


      })
  }

}
