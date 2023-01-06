
var vm = function () {

        console.log('ViewModel initiated...');

    var self = this;
    self.id = ko.observable('1')
    self.id2 = ko.observable('2')
    self.nome = ko.observable('');
    self.desc = ko.observable('');
    self.tel = ko.observable('');
    self.hor = ko.observable('');
    self.tel = ko.observable('');
    self.site = ko.observable('');
    self.morada = ko.observable('');
    self.email = ko.observable('');

      
    self.contas = {
        "currentuser": [{ nome: '', n: -1 }],

        "cliente": [{ email: 'gui@mail.com', pass: '123', msg: [''], nome: 'Guilherme', tel: '9865742', ep: '', sa: '', ea: '', mp: '' }],

        'loja': [{ email: 'Chip7@gmail.com', pass: 'infotech', emailc: 'lojaaveiro@chip7.pt', tel: '234029174', msg: '', site: 'https://chip7.pt/', nome: 'CHIP 7 - Aveiro', desc: 'A CHIP7 disponibiliza uma vasta gama de produtos e servicos informaticos em mais de 65 lojas proximas de si.', horario: 'Segunda a sabado:10h00 as 13h00 e das 14h30 as 19h30;Domingos e Feriados:Encerrada', morada: ' Av Forca Aerea, 77 3800-356, Aveiro' }],
        "pedidos": [{ tipo: '', cliente: '', problema: '', marca: '', casa: '', loja: '', orcdesc: "", orca: "", orcp: "", state: '', now: '' }]

    };

    var y = 0;
    self.pagar1 = function () {
        if (y == 2) {
            if ($("#casa").is(":checked")) {
                self.contas.pedidos.push({ "problema": $("#problema").val(), "marca": $("#marca").val(), "tipo": "Mantainance", "casa": $("#casa").val(), "cliente": self.contas.currentuser[0].nome, "loja": $("#loja").text(), "state": "Em Espera", "orcdesc": "", "orca": "", "orcp": "", "now":"" });
                console.log(self.contas);
                window.localStorage.setItem('contas', JSON.stringify(self.contas))
                $("#pagar2").modal("hide");
                $("#exampleModal2").modal("hide");
            }
            else {
                self.contas.pedidos.push({ "problema": $("#problema").val(), "marca": $("#marca").val(), "tipo": "Mantainance", "casa": "0", "cliente": self.contas.currentuser[0].nome, "loja": $("#loja").text(), "state": "Em Espera", "orcdesc": "", "orca": "", "orcp": "", "now": "" });
                console.log(self.contas);
                window.localStorage.setItem('contas', JSON.stringify(self.contas))
                $("#pagar2").modal("hide");
                $("#exampleModal2").modal("hide");
            }
        }
        else {y=y+1 }
     

    }
    var z = 0;
    self.pagar2 = function () {
        if (z == 2) {
            if ($("#casa1").is(":checked")) {
                self.contas.pedidos.push({ "problema": $("#problema1").val(), "marca": $("#marca1").val(), "tipo": "Mantaince", "casa": $("#casa1").val(), "cliente": self.contas.currentuser[0].nome, "loja": $("#loja").text(), "state": "Em Espera", "orcdesc": "", "orca": "", "orcp": "", "now": "" });
                console.log(self.contas);
                window.localStorage.setItem('contas', JSON.stringify(self.contas))
                $("#pagar2").modal("hide");
                $("#exampleModal2").modal("hide");
            }
            else {
                self.contas.pedidos.push({ "problema": $("#problema1").val(), "marca": $("#marca1").val(), "tipo": "Mantaince", "casa": "0", "cliente": self.contas.currentuser[0].nome, "loja": $("#loja").text(), "state": "Em Espera", "orcdesc": "", "orca": "", "orcp": "", "now": "" });
                console.log(self.contas);
                window.localStorage.setItem('contas', JSON.stringify(self.contas))
                $("#pagar2").modal("hide");
                $("#exampleModal2").modal("hide");
            }
        }
        else { z = z + 1 }


    }
    var w  = 0;
    self.pop = function (r) {
        if (w == 2) {
            var x = "#pagar" + String(r);
            var t = "#preco" + String(r);
            if ($("#tipo :selected").val() == "Tele") {
                console.log("d")
                $(t).val("O preco base do seu pedido vai ficar a: 80 euros");
                if ($("#casa").is(":checked")) {
                    $(t).val("O preco base do seu pedido vai ficar a: 90 euros");
                    $(x).modal("show");
                }
                else { $(x).modal("show"); }
            }
            if ($("#tipo :selected").val() == "Computador") {
                $(t).val("O preco base do seu pedido vai ficar a: 100 euros");
                if ($("#casa").is(":checked")) {
                    $(t).val("O preco base do seu pedido vai ficar a: 105 euros");
                    $(x).modal("show");
                }
                else { $(x).modal("show"); }
            }
        }
        else { w =w+1; }
    };


        self.loadcontas = function () {

            if (localStorage.getItem('contas') != null) {

                self.contas = JSON.parse(localStorage.contas)

            } else {

                localStorage.setItem('contas', JSON.stringify(self.contas));

            };
            self.contas = JSON.parse(localStorage.contas);
            self.nome = ko.observable(self.contas.loja[0].nome);
            self.desc = ko.observable(self.contas.loja[0].desc);
            self.tel = ko.observable(self.contas.loja[0].tel);
            self.hor = ko.observable(self.contas.loja[0].horario);
            self.tel = ko.observable(self.contas.loja[0].tel);
            self.site = ko.observable(self.contas.loja[0].site);
            self.morada = ko.observable(String(self.contas.loja[0].morada));
            self.email = ko.observable(self.contas.loja[0].emailc);
         }
        self.loadcontas();
        console.log(self.contas);



    console.log("VM initialized!");
}
$(document).ready(function () {
    console.log("ready!");
    ko.applyBindings(new vm());
});
