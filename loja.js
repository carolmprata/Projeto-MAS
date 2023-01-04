
var vm = function () {

        console.log('ViewModel initiated...');

        var self = this;
        

      
    self.contas = {
        "currentuser": '',

        "cliente": [{ email: 'gui@mail.com', pass: '123', msg: [''], nome: 'Guilherme', tel: '9865742' }],

        'loja': [{ email: 'Chip7@gmail.com', pass: 'infotech', face: '', emailc:'', tel: '', msg: '', site: '' ,nome:'', desc:'', horario:'',morada:''}],
        "pedidos": [{ tipo: '', cliente: '', problema: '', marca: '', casa: '' }]

    };


    self.pagar = function () {
           self.contas.pedidos.push({ "problema": $("#problema").val(), "marca": $("#marca").val(), "tipo": $("#tipo").val(), "casa": $("#casa").val(), "cliente": self.contas.currentuser });
           console.log(self.contas);
     

    }

    self.pop = ko.computed(function () {
           if ($("#tipo :selected").val() == "Tele") {
            console.log("d")
            $("#preco").val("O preço base do seu pedido ficará a:80€");
            if ($("#casa").is(":checked")) {
                $("#preco").val("O preço base do seu pedido ficará a:90€");
                $("#pagar").modal("show");
           }
            else { $("#pagar").modal("show"); }
            }
           if ($("#tipo :selected").val() == "Computador") {
            $("#preco").val("O preço base do seu pedido ficará a:100€");
            if ($("#casa").is(":checked")) {
                $("#preco").val("O preço base do seu pedido ficará a:105€");
                $("#pagar").modal("show");
            }
            else { $("#pagar").modal("show"); }
           }
    });


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
