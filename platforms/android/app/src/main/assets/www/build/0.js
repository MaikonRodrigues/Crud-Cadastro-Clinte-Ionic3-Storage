webpackJsonp([0],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarClientePageModule", function() { return EditarClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editar_cliente__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditarClientePageModule = /** @class */ (function () {
    function EditarClientePageModule() {
    }
    EditarClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editar_cliente__["a" /* EditarClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editar_cliente__["a" /* EditarClientePage */]),
            ],
        })
    ], EditarClientePageModule);
    return EditarClientePageModule;
}());

//# sourceMappingURL=editar-cliente.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cliente_cliente__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditarClientePage = /** @class */ (function () {
    function EditarClientePage(navCtrl, navParams, clienteProvider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clienteProvider = clienteProvider;
        this.toast = toast;
        if (this.navParams.data.cliente && this.navParams.data.key) {
            this.model = this.navParams.data.cliente;
            this.key = this.navParams.data.key;
        }
        else {
            this.model = new __WEBPACK_IMPORTED_MODULE_2__providers_cliente_cliente__["a" /* Cliente */]();
        }
    }
    EditarClientePage.prototype.save = function () {
        var _this = this;
        this.salvarCliente()
            .then(function () {
            //toast retorna uma mensagem 				estipulado o tempo e a posição
            _this.toast.create({ message: 'Cliente salvo', duration: 3000, position: 'bottom' }).present();
            _this.navCtrl.pop(); // apos mostrar mensagem o pop fecha a mensagem
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao salvar', duration: 3000, position: 'bottom' }).present();
        });
    };
    EditarClientePage.prototype.salvarCliente = function () {
        if (this.key) {
            return this.clienteProvider.update(this.key, this.model); //chama o metodo de editar
        }
        else {
            return this.clienteProvider.insert(this.model); //senão chama o método salvar
        }
    };
    EditarClientePage.prototype.ionViewDidEnter = function () {
    };
    EditarClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-cliente',template:/*ion-inline-start:"/home/maikon/Ionic/crudbd/src/pages/editar-cliente/editar-cliente.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>editar-cliente</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Nome:</ion-label>	<!-- Inserindo Label -->\n      			 <!-- tipo texto--> 				 <!--model tras todas as informações dos clientes -->\n      <ion-input type="text" name="nome" [(ngModel)]="model.nome"></ion-input> <!--Input para receber texto -->\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Telefone:</ion-label>\n        		 <!--tipo telefone --> 				 <!--recupera telefone -->\n        <ion-input type="tel" name="tel" [(ngModel)]="model.tel"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n          <ion-label stacked>Data Nascimento:</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" name="data" [(ngModel)]="model.data"></ion-datetime>\n        </ion-item>\n\n\n        <ion-item>\n        	 <!--Check box checando se esta ativo -->\n            <ion-label>Ativo:</ion-label>\n            <ion-checkbox  name="ativo" [(ngModel)]="model.ativo"></ion-checkbox>\n          </ion-item>\n\n\n          \n         \n\n  </ion-list>\n	 <!--Botão para salvar-->\n  <button ion-button block (click)="save()">Salvar</button>\n  \n</ion-content>\n'/*ion-inline-end:"/home/maikon/Ionic/crudbd/src/pages/editar-cliente/editar-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_cliente_cliente__["b" /* ClienteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], EditarClientePage);
    return EditarClientePage;
}());

//# sourceMappingURL=editar-cliente.js.map

/***/ })

});
//# sourceMappingURL=0.js.map