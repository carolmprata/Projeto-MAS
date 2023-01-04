
var vm = function () {

        console.log('ViewModel initiated...');

        var self = this;
        

      
    self.contas = {
        "currentuser": '',

        "cliente": [{ email: 'gui@mail.com', pass: '123', msg: [''], nome: 'Guilherme', tel: '9865742' }],

        'loja': [{ email: 'Chip7@gmail.com', pass: 'infotech', face: '', emailc:'', tel: '', msg: '', site: '' ,nome:'', desc:'', horario:'',morada:''}],
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


    var para = '0';
    var erro = '0';
    var pop = '0';



    self.login = function () {
        self.contas.currentuser = '';

            for (i = 0; i < self.contas.cliente.length; i++) {

                if (self.contas.cliente[i].email == $("#email").val() && self.contas.cliente[i].pass == $("#password").val()) {
                    self.contas.currentuser = self.cliente[self.contas.cliente.indexOf($("#email").val())].nome;
                    window.location.href = window.location.href.replace("Login.html","index.html")
                }
                if (self.contas.loja[i].email == $("#email").val() && self.contas.loja[i].pass == $("#password").val()) {
                    window.location.href = window.location.href.replace("Login.html", "criarloja.html")
                }
                if (self.contas.cliente[i].email != $("#email").val() || self.contas.cliente[i].pass != $("#password").val()) {
                    if (pop == '1') {
                        $("#erro").modal('show');
                    }
                    erro = '1';
                }
                if (self.contas.loja[i].email != $("#email").val() || self.contas.loja[i].pass != $("#password").val()) {
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
