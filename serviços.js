
var vm = function () {

        console.log('ViewModel initiated...');
    var self = this;
    var orccurrent = '';
    self.pedidos = ko.observableArray([]);
    self.descorc = ko.observable('');
    self.descp = ko.observable('');
    self.now = ko.observable('');
    self.contas = {
        "currentuser": [{ nome: '', n: -1 }],

        "cliente": [{ email: 'gui@mail.com', pass: '123', msg: [''], nome: 'Guilherme', tel: '9865742', ep: '', sa: '', ea: '', mp: '' }],

        'loja': [{ email: 'Chip7@gmail.com', pass: 'infotech', emailc: 'lojaaveiro@chip7.pt', tel: '234029174', msg: '', site: 'https://chip7.pt/', nome: 'CHIP 7 - Aveiro', desc: 'A CHIP7 disponibiliza uma vasta gama de produtos e servicos informaticos em mais de 65 lojas proximas de si.', horario: 'Segunda a sabado:10h00 as 13h00 e das 14h30 as 19h30;Domingos e Feriados:Encerrada', morada: ' Av Forca Aerea, 77 3800-356, Aveiro' }],
        "pedidos": [{ tipo: '', cliente: '', problema: '', marca: '', casa: '', loja: '', orcdesc: "", orca: "", orcp: "", state: '', now:'' }]

    };



    self.verificar = function (nome) {
        for (i = 0; i < self.contas.pedidos.length; i++) {
            if (orccurrent == self.contas.pedidos[i].cliente) {
                if (self.contas.pedidos[i].orca == '' || self.contas.pedidos[i].orca == '1') {
                    orccurrent = nome;
                    $("#1").modal('show');
                } else {
                    self.descorc(self.contas.pedidos[i].orcdesc);
                    self.descp(self.contas.pedidos[i].orcp);

                    $("#2").modal('show');
                }
                
            }
        }

    }
    self.negar = function (nome) {
        for (i = 0; i < self.contas.pedidos.length; i++) {
            if (orccurrent == self.contas.pedidos[i].cliente) {
                self.contas.pedidos[i].orca = '-1'
                console.log(self.contas);
                window.localStorage.setItem('contas', JSON.stringify(self.contas));
                    $("#2").modal('hide');
            }
        }

    }
    self.aceitar = function (nome) {
        for (i = 0; i < self.contas.pedidos.length; i++) {
            if (orccurrent == self.contas.pedidos[i].cliente) {
                self.contas.pedidos[i].orca = '1'
                console.log(self.contas);
                window.localStorage.setItem('contas', JSON.stringify(self.contas));
                    $("#2").modal('hide');
            }
        }

    }



        self.loadcontas = function () {

            if (localStorage.getItem('contas') != null) {

                self.contas = JSON.parse(localStorage.contas)

            } else {

                localStorage.setItem('contas', JSON.stringify(self.contas));

            };
            var temp = [];
            self.now(self.contas.loja[0].nome);
            for (i = 0; i < self.contas.pedidos.length; i++) {
                if (self.contas.pedidos[i].cliente == self.contas.currentuser[0].nome) {
                    self.contas.pedidos[i].now = self.now();
                    temp.push(self.contas.pedidos[i])
                }
            }
            self.pedidos(temp);
            
            

         }
        self.loadcontas();
        console.log(self.contas);


    var para = '0';
    var erro = '0';
    var pop = '0';



        self.login = function () {

            for (i = 0; i < self.contas.cliente.length; i++) {

                if (self.contas.cliente[i].email == $("#email").val() && self.contas.cliente[i].pass == $("#password").val()) {
                    window.location.href = window.location.href.replace("Login.html","index.html")
                }
                if (self.contas.cliente[i].email != $("#email").val() || self.contas.cliente[i].pass != $("#password").val()) {
                    if (pop == '1') {
                        $("#erro").modal('show');
                    }
                    erro = '1';
                }

                    

            }
            if (erro == '1') {
                pop = '1';
            }

        }

   


    console.log("VM initialized!");
}
$(document).ready(function () {
    console.log("ready!");
    ko.applyBindings(new vm());
});
