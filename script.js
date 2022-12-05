/*
 

Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
desejado pelo cliente, 
determine o número de cada uma das notas necessárias para totalizar esse valor. 

Por exemplo, se o Marcelo deseja
retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

Exemplo de entrada:
72
Exemplo de saída:
GC$ 50,00 -> 1

GC$ 10,00 -> 2
GC$ 5,00 -> 0
GC$ 1,00 -> 2 */

/* GC$ 50,00,
GC$ 10,00, GC$ 5,00 e GC$ 1,00. */

let saque = Number(prompt("Digite quanto deseja sacar:"));
let cinquenta = Math.trunc(saque / 50);
let dez = Math.trunc((saque % 50) / 10);
let cinco = Math.trunc(((saque % 50) % 10) / 5);
let um = Math.trunc((((saque % 50) % 10) % 5) / 1);

document.write(`Notas de 50: ${cinquenta}<br>`);
document.write(`Notas de 10: ${dez}<br>`);
document.write(`Notas de 5: ${cinco}<br>`);
document.write(`Notas de 1: ${um}<br>`);
