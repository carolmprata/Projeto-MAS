
var vm = function () {

        console.log('ViewModel initiated...');

        var self = this;

        self.contas = {

            "cliente": [{ email: 'gui@mail.com', pass: '123' },],

            'loja': [],

            'estafeta': [],

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


    
    self.updatecontas = function () {

        if ($("#email").val() != '' && $("#password").val() != '') {
            self.contas.cliente.push({ "email": $("#email").val(), "pass": $("#password").val() });
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
