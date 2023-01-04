
var vm = function () {

        console.log('ViewModel initiated...');

        var self = this;
        

      
    self.contas = {
        "currentuser": [{ nome: '' }],

        "cliente": [{ email: 'gui@mail.com', pass: '123', msg: [''], nome: 'Guilherme', tel: '9865742' }],

        'loja': [{ email: 'Chip7@gmail.com', pass: 'infotech', face: '', emailc:'', tel: '', msg: '', site: '' ,nome:'', desc:'', horario:'',morada:''}],
        "pedidos": [{ tipo: '', cliente: '', problema: '', marca: '', casa: '' , loja:''}]

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

         }
        self.loadcontas();
        console.log(self.contas);



    console.log("VM initialized!");
}
$(document).ready(function () {
    console.log("ready!");
    ko.applyBindings(new vm());
});
