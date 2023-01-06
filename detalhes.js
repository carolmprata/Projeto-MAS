
var vm = function () {

        console.log('ViewModel initiated...');

        var self = this;
        
    self.name = ko.observable('');
    self.desc = ko.observable('');
    self.tel = ko.observable('');
    self.pass = ko.observable('');
    self.email = ko.observable('');
    self.contas = {
        "currentuser": [{ nome: '', n: -1 }],

        "cliente": [{ email: 'gui@mail.com', pass: '123', msg: [''], nome: 'Guilherme', tel: '9865742', ep: '', sa: '', ea: '', mp: '' }],

        'loja': [{ email: 'Chip7@gmail.com', pass: 'infotech', emailc: 'lojaaveiro@chip7.pt', tel: '234029174', msg: '', site: 'https://chip7.pt/', nome: 'CHIP 7 - Aveiro', desc: 'A CHIP7 disponibiliza uma vasta gama de produtos e servicos informaticos em mais de 65 lojas proximas de si.', horario: 'Segunda a sabado:10h00 as 13h00 e das 14h30 as 19h30;Domingos e Feriados:Encerrada', morada: ' Av Forca Aerea, 77 3800-356, Aveiro' }],
        "pedidos": [{ tipo: '', cliente: '', problema: '', marca: '', casa: '', loja: '', orcdesc: "", orca: "", orcp: "", state: '', now: '' }]

    };

  
    self.guardar = function () {

            var x = parseInt(self.contas.currentuser[0].n);
            self.contas.cliente[x].nome = self.name();
            self.contas.cliente[x].tel = self.tel();
            self.contas.cliente[x].email = self.email();
            self.contas.cliente[x].pass = self.pass();
            if ($("#ep").prop("checked")) {
                self.contas.cliente[x].ep = "1";
            } else { self.contas.cliente[x].ep = "" }
            if ($("#sa").prop("checked")) {
                self.contas.cliente[x].sa = "1";
            } else { self.contas.cliente[x].sa = "" }
            if ($("#ea").prop("checked")) {
                self.contas.cliente[x].ea = "1";
            } else { self.contas.cliente[x].ea = "" }
            if ($("#pagamento1").prop("checked")) {
                self.contas.cliente[x].mp = "1";
            }
            if ($("#pagamento2").prop("checked")) {
                self.contas.cliente[x].mp = "2";
            }
            if ($("#pagamento3").prop("checked")) {
                self.contas.cliente[x].mp = "3";
            }
            if ($("#pagamento4").prop("checked")) {
                self.contas.cliente[x].mp = "4";
            }



        console.log(self.contas)

        window.localStorage.setItem('contas', JSON.stringify(self.contas))

    }
    console.log("VM initialized!");


    var x = -1;
        self.loadcontas = function () {

            if (localStorage.getItem('contas') != null) {

                self.contas = JSON.parse(localStorage.contas)
                for (i = 0; i < self.contas.cliente.length; i++) {
                    if (self.contas.cliente[i].nome == self.contas.currentuser[0].nome) {
                        self.name(self.contas.cliente[i].nome);
                        self.pass(self.contas.cliente[i].pass);
                        self.tel(self.contas.cliente[i].tel);
                        self.email(self.contas.cliente[i].email);
                        console.log(i);
                        if (self.contas.cliente[i].ep == '1') {
                            $("#ep").prop("checked", true);
                        }
                        if (self.contas.cliente[i].sa == '1') {
                            $("#sa").prop("checked", true);
                        }
                        if (self.contas.cliente[i].ea == '1') {
                            $("#ea").prop("checked", true);
                        }
                        var x = "pagamento" + self.contas.cliente[i].mp;
                        $(x).attr('checked', 'checked');
                        self.contas.currentuser[0].n = i;
                    }
                }

            } else {

                localStorage.setItem('contas', JSON.stringify(self.contas));
                for (i = 0; i < self.contas.cliente.length; i++) {
                    if (self.contas.cliente[i].nome == self.contas.currentuser[0].nome) {
                        self.name(self.contas.cliente[i].nome);
                        self.pass(self.contas.cliente[i].pass);
                        self.tel(self.contas.cliente[i].tel);
                        self.email(self.contas.cliente[i].email);
                        console.log(i);
                        if (self.contas.cliente[i].ep == '1') {
                            $("#ep").prop("checked", true);
                        }
                        if (self.contas.cliente[i].sa == '1') {
                            $("#sa").prop("checked", true);
                        }
                        if (self.contas.cliente[i].ea == '1') {
                            $("#ea").prop("checked", true);
                        }
                        var x = "pagamento" + self.contas.cliente[i].mp;
                        $(x).attr('checked', 'checked');
                        self.contas.currentuser[0].n = i;
                    }
                }

            };

           
            
        }
        self.loadcontas();
    console.log(self.contas);




    console.log("VM initialized!");
}
$(document).ready(function () {
    console.log("ready!");
    ko.applyBindings(new vm());
});
