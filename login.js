
var vm = function () {

        console.log('ViewModel initiated...');
        
        var self = this;
        
    self.contas = {
        "currentuser": [{ nome: '', n: -1 }],

        "cliente": [{ email: 'gui@mail.com', pass: '123', msg: [''], nome: 'Guilherme', tel: '9865742', ep: '', sa: '', ea: '', mp: '' }],

        'loja': [{ email: 'Chip7@gmail.com', pass: 'infotech', emailc: 'lojaaveiro@chip7.pt', tel: '234029174', msg: '', site: 'https://chip7.pt/', nome: 'CHIP 7 - Aveiro', desc: 'A CHIP7 disponibiliza uma vasta gama de produtos e servicos informaticos em mais de 65 lojas proximas de si.', horario: 'Segunda a sabado:10h00 as 13h00 e das 14h30 as 19h30;Domingos e Feriados:Encerrada', morada: ' Av Forca Aerea, 77 3800-356, Aveiro' }],
        "pedidos": [{ tipo: '', cliente: '', problema: '', marca: '', casa: '', loja: '', orcdesc: "", orca: "", orcp: "", state: '' }]

    };

    



        self.loadcontas = function () {

            if (localStorage.getItem('contas') != null) {

                self.contas = JSON.parse(localStorage.contas)


            } else {

                localStorage.setItem('contas', JSON.stringify(self.contas));

            };




         }
        self.loadcontas();
        console.log(self.contas);


    var para = '0';
    var erro = '0';
    var pop = '0';


    self.contas.currentuser[0].nome = '';
    self.login = function () {
        
        

        for (i = 0; i < self.contas.cliente.length; i++) {
                if (self.contas.cliente[i].email == $("#email").val() && self.contas.cliente[i].pass == $("#password").val()) {
                    self.contas.currentuser[0].nome = self.contas.cliente[i].nome;
                    window.localStorage.setItem('contas', JSON.stringify(self.contas))
                    window.location.href = window.location.href.replace("Login.html","lojas.html")
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
        if (self.contas.loja[0].email == $("#email").val() && self.contas.loja[i].pass == $("#password").val()) {
            window.location.href = window.location.href.replace("Login.html", "criarloja.html")
        }
    }





    console.log("VM initialized!");
}
$(document).ready(function () {
    console.log("ready!");
    ko.applyBindings(new vm());
});
