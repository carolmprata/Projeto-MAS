
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

    self.guardar = function () {
      
        if ($("#email").val() != '') {
            self.contas.loja[0].emailc = $("#email").val();
        }
        if ($("#nome").val() != '') {
            self.contas.loja[0].nome = $("#nome").val();
        }
        if ($("#descricao").val() != '') {
            self.contas.loja[0].desc = $("#descricao").val();
        }
        if ($("#phone").val() != '') {
            self.contas.loja[0].tel = $("#phone").val();
        }
        if ($("#url").val() != '') {
            self.contas.loja[0].site = "https://"+$("#url").val();
        }
        if ($("#horario").val() != '') {
            self.contas.loja[0].horario = $("#horario").val();
        }
        if ($("#morada").val() != '') {
            self.contas.loja[0].morada = $("#morada").val();
        }


        console.log(self.contas);

        window.localStorage.setItem('contas', JSON.stringify(self.contas))

    }
    console.log("VM initialized!");



        self.loadcontas = function () {

            if (localStorage.getItem('contas') != null) {

                self.contas = JSON.parse(localStorage.contas)

            } else {

                localStorage.setItem('contas', JSON.stringify(self.contas));

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
