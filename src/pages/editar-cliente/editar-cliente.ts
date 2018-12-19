import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Cliente, ClienteProvider } from '../../providers/cliente/cliente';

@IonicPage()
@Component({
  selector: 'page-editar-cliente',
  templateUrl: 'editar-cliente.html',
})
export class EditarClientePage {
model:Cliente;
key:string;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private clienteProvider:ClienteProvider,
    private toast: ToastController
  ) {

    if(this.navParams.data.cliente && this.navParams.data.key){
      this.model = this.navParams.data.cliente;
      this.key = this.navParams.data.key;
    }else{
      this.model = new Cliente();
    }


  }


  save(){
    this.salvarCliente()
    .then(() => {
    	//toast retorna uma mensagem 				estipulado o tempo e a posição
      this.toast.create({message: 'Cliente salvo', duration:3000, position:'bottom'}).present();
      this.navCtrl.pop(); // apos mostrar mensagem o pop fecha a mensagem
    })

    .catch(() => {
      this.toast.create({message: 'Erro ao salvar', duration:3000, position:'bottom'}).present();
      
    });
  }

  private salvarCliente(){
    if(this.key){	//saber se a chave existe se sim 
      return this.clienteProvider.update(this.key, this.model);	//chama o metodo de editar
    }else{
      return this.clienteProvider.insert(this.model); //senão chama o método salvar
    }
  }

  ionViewDidEnter() {
   
  }

}
