let Estoque = { 
Celular: 150,
Fonedeouvido:55,
Pendrive:37,  
CaixadeAudio:28,  
Tablet: 32,
CarregadorPortatil: 29 };

let Vendas = {
Celular: 38,
Fonedeouvido:10,
Pendrive: 17,
CaixadeAudio:8,
Tablet: 5, 
CarregadorPortatil: 15  };

function calcularEstoque(Estoque, Vendas) {
let unidadesRestantes = {};

for (let produto in Estoque) {
unidadesRestantes[produto] = Estoque[produto] - Vendas[produto]; }

return unidadesRestantes; }

let unidadesRestantes = calcularEstoque(Estoque, Vendas);
console.log(unidadesRestantes);
