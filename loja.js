
var vm = function () {

        console.log('ViewModel initiated...');

        var self = this;
        

      
    self.contas = {
        "currentuser": '',

        "cliente": [{ email: 'gui@mail.com', pass: '123', msg: [''], nome: 'Guilherme', tel: '9865742' }],

        'loja': [{ email: 'Chip7@gmail.com', pass: 'infotech', face: '', emailc:'', tel: '', msg: '', site: '' ,nome:'', desc:'', horario:'',morada:''}],
        "pedidos": [{ tipo: '', cliente: '', problema: '', marca: '', casa: '' }]

    };


    function pagar()



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
