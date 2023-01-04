
var vm = function () {

        console.log('ViewModel initiated...');

        var self = this;


    self.contas = {
        "currentuser": '',

        "cliente": [{ email: 'gui@mail.com', pass: '123', msg: [''], nome: 'Guilherme', tel: '9865742' }],

        'loja': [{ email: 'Chip7@gmail.com', pass: 'infotech', face: '', email: '', tel: '', msg: '', site: '' }],
        "pedidos": [{ tipo: '', cliente: '', problema: '', marca: '', casa: '' }]

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
