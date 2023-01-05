
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

        'loja': [{ email: 'Chip7@gmail.com', pass: 'infotech', emailc: 'lojaaveiro@chip7.pt', tel: '234029174', msg: '', site: 'https://chip7.pt/', nome: 'CHIP 7 - Aveiro', desc: 'A CHIP7 disponibiliza uma vasta gama de produtos e serviços informáticos em mais de 65 lojas próximas de si.', horario: 'Segunda a sabado:10h00 às 13h00 e das 14h30 às 19h30;Domingos e Feriados:Encerrada', morada: ' Av Força Aerea, 77 3800-356, Aveiro' }],
        "pedidos": [{ tipo: '', cliente: '', problema: '', marca: '', casa: '', loja: '' }]

    };
    
    var x = 0;
    self.login1 = function () {
        if (x == 2) {
            if (self.contas.currentuser[0].nome != '') {
                window.location.href = window.location.href.replace("lojas.html", "meusservi\xE7os.html");
            }
            else { window.location.href = window.location.href.replace("lojas.html", "Login.html"); }
        }
        else {x=x+1 }
    };

    self.login2 = function () {
        if (x == 2) {
            if (self.contas.currentuser[0].nome != '') {
                window.location.href = window.location.href.replace("lojas.html", "detalhesconta.html");
            }
            else { window.location.href = window.location.href.replace("lojas.html", "Login.html"); }
        }
        else {x=x+1 }
    };

    self.loadcontas = function () {

        if (localStorage.getItem('contas') != null) {

            self.contas = JSON.parse(localStorage.contas);

            

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

        




    };
        self.loadcontas();
        console.log(self.contas);

    var para = 0;
    
    self.updatecontas = function () {

        if ($("#email").val() != '' && $("#password").val() != '') {
            self.contas.cliente.push({ "email": $("#email").val(), "pass": $("#password").val(), "nome": $("#nome").val(), "tel": $("#tele").val() });
            window.location.href = window.location.href.replace("criarconta.html", "Login.html");
        }
        if ($("#email").val() == '' && $("#password").val() == '') {
            if (para == '1') {
                $("#erro").modal('show');
            }
            else {
                para = '1';
            }
        }


        console.log(self.contas);

        window.localStorage.setItem('contas', JSON.stringify(self.contas))

        }
    console.log("VM initialized!");
}


$(document).ready(function () {
    console.log("ready!");
    ko.applyBindings(new vm());
});
