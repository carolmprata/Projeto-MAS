
var vm = function () {

        console.log('ViewModel initiated...');

        var self = this;
        
    self.nome = ko.observable('');
    self.desc = ko.observable('');
    self.tel = ko.observable('');
    self.hor = ko.observable('');
    self.tel = ko.observable('');
    self.site = ko.observable('');
    self.morada = ko.observable('');
    self.email = ko.observable('');
      
    self.contas = {
        "currentuser": [{ nome: '' }],

        "cliente": [{ email: 'gui@mail.com', pass: '123', msg: [''], nome: 'Guilherme', tel: '9865742' }],

        'loja': [{ email: 'Chip7@gmail.com', pass: 'infotech', emailc: 'lojaaveiro@chip7.pt', tel: '234029174', msg: '', site: 'https://chip7.pt/', nome: 'CHIP 7 - Aveiro', desc: 'A CHIP7 disponibiliza uma vasta gama de produtos e serviços informáticos em mais de 65 lojas próximas de si.', horario: 'Segunda a sábado:10h00 às 13h00 e das 14h30 às 19h30;Domingos e Feriados:Encerrada', morada: ' Av Força Aerea, 77 3800-356, Aveiro' }],
        "pedidos": [{ tipo: '', cliente: '', problema: '', marca: '', casa: '', loja: '' }]

    };

    var y = 0;
    self.pagar = function () {
        if (y == 2) {
            self.contas.pedidos.push({ "problema": $("#problema").val(), "marca": $("#marca").val(), "tipo": $("#tipo").val(), "casa": $("#casa").val(), "cliente": self.contas.currentuser, "loja": $("#loja").text() });
            console.log(self.contas);
            window.localStorage.setItem('contas', JSON.stringify(self.contas))
        }
        else {y=y+1 }
     

    }
    var x = 0;
    self.pop = function () {
        if (x == 2) {
            if ($("#tipo :selected").val() == "Tele") {
                console.log("d")
                $("#preco").val("O preco base do seu pedido vai ficar a: 80 euros");
                if ($("#casa").is(":checked")) {
                    $("#preco").val("O preco base do seu pedido vai ficar a: 90 euros");
                    $("#pagar").modal("show");
                }
                else { $("#pagar").modal("show"); }
            }
            if ($("#tipo :selected").val() == "Computador") {
                $("#preco").val("O preco base do seu pedido vai ficar a: 100 euros");
                if ($("#casa").is(":checked")) {
                    $("#preco").val("O preco base do seu pedido vai ficar a: 105 euros");
                    $("#pagar").modal("show");
                }
                else { $("#pagar").modal("show"); }
            }
        }
        else { x =x+1; }
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
