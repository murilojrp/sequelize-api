const { log } = require('console');

var input = require('fs').readFileSync('./stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));
let x = Number(lines.shift());

		let i=1;
		for (i=1; i<=x; i++) {
			if (i%2!=0) {
				console.log(i);
            }
        }
 


// console.log("I=1 J=7");
// console.log("I=1 J=6");
// console.log("I=1 J=5");

// console.log("I=3 J=7");
// console.log("I=3 J=6");
// console.log("I=3 J=5");

// console.log("I=5 J=7");
// console.log("I=5 J=6");
// console.log("I=5 J=5");

// console.log("I=7 J=7");
// console.log("I=7 J=6");
// console.log("I=7 J=5");

// console.log("I=9 J=7");
// console.log("I=9 J=6");
// console.log("I=9 J=5");


// let salario = Number(lines.shift());
	
// 	let nsalario = 0;
//     let reajuste = 0;
	
	
// 	if (salario>=0 && salario<=400.00) {
// 	reajuste=salario*0.15;
// 	nsalario=salario+reajuste;
// 	console.log(`Novo salario: ${nsalario.toFixed(2)}`);
// 	console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
// 	console.log(`Em percentual: 15 %`);
// 	}
// 	if (salario>=400.01 && salario<=800.00) {
// 	reajuste=salario*0.12;
// 	nsalario=salario+reajuste;
// 	console.log(`Novo salario: ${nsalario.toFixed(2)}`);
// 	console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
// 	console.log(`Em percentual: 12 %`);
// 	}
// 	if (salario>=800.01 && salario<=1200.00) {
// 	reajuste=salario*0.10;
// 	nsalario=salario+reajuste;
// 	console.log(`Novo salario: ${nsalario.toFixed(2)}`);
// 	console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
// 	console.log(`Em percentual: 10 %`);
// 	}
// 	if (salario>=1200.01 && salario<=2000.00) {
// 	reajuste=salario*0.07;
// 	nsalario=salario+reajuste;
// 	console.log(`Novo salario: ${nsalario.toFixed(2)}`);
// 	console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
// 	console.log(`Em percentual: 7 %`);
// 	}
// 	if (salario>2000.00) {
// 	reajuste=salario*0.04;
// 	nsalario=salario+reajuste;
// 	console.log(`Novo salario: ${nsalario.toFixed(2)}`);
// 	console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
// 	console.log(`Em percentual: 4 %`);
// 	}
	


// let x = lines.shift();
	
// 	if (x==1) {
// 		console.log("January");
// 	}
// 	if (x==2) {
// 		console.log("February");
// 	}
// 	if (x==3) {
// 		console.log("March");
// 	}
// 	if (x==4) {
// 		console.log("April");
// 	}
// 	if (x==5) {
// 		console.log("May");
// 	}
// 	if (x==6) {
// 		console.log("June");
// 	}
// 	if (x==7) {
// 		console.log("July");
// 	}
// 	if (x==8) {
// 		console.log("August");
// 	}
// 	if (x==9) {
// 		console.log("September");
// 	}
// 	if (x==10) {
// 		console.log("October");
// 	}
// 	if (x==11) {
// 		console.log("November");
// 	}
// 	if (x==12) {
// 		console.log("December");
// 	}


// let i = 0;
// let positivos = 0;
// let x = 0;
    
//     for (i=0; i<6; i++) {
//         x = lines.shift();
//         if (x>0) {
//             positivos++;
//         } 
//     }
    
//     console.log(`${positivos} valores positivos`);
    

// let i = 1;

	
	
// 	for (i=1; i<=100; i++) {
// 		if (i%2==0) {
// 			console.log(`${i}`);
// 		}
// 	}
	

// console.log(`1 x ${numero} = ${numero*1}`);
// console.log(`2 x ${numero} = ${numero*2}`);
// console.log(`3 x ${numero} = ${numero*3}`);
// console.log(`4 x ${numero} = ${numero*4}`);
// console.log(`5 x ${numero} = ${numero*5}`);
// console.log(`6 x ${numero} = ${numero*6}`);
// console.log(`7 x ${numero} = ${numero*7}`);
// console.log(`8 x ${numero} = ${numero*8}`);
// console.log(`9 x ${numero} = ${numero*9}`);
// console.log(`10 x ${numero} = ${numero*10}`);
 	

// console.log("---------------------------------------");
// console.log("");
// console.log("|x = 35                               |");
// console.log("");
// console.log("|                                     |");
// console.log("");
// console.log("|                x = 35               |");
// console.log("");
// console.log("|                                     |");
// console.log("");
// console.log("|                               x = 35|");
// console.log("");
// console.log("---------------------------------------");

// let [horaI, minutoI, horaF, minutoF] = pegarValores(lines.shift());
// let difH = 0;
// let difM = 0;
// if (horaI < horaF) { 
//     difH = horaF - horaI;
// } else if (horaI > horaF) {
//     difH = 24 - horaI + horaF;
// } else if (horaI === horaF && minutoF === minutoI) {
//     difH = 24;
//     difM = 0;
// }
// if (minutoI > minutoF && difH === 1) {
//     difH = 0;
//     difM = 60 + minutoF - minutoI;
// } else if (minutoI < minutoF) { 
//     difM = minutoF - minutoI;
// } else if (minutoI > minutoF) {
//     difM = 60 - minutoI + minutoF;
// } 
    
// // console.log(difH)

// // console.log(a, b, c, d);
// // let dif;

// // dif = ( (d * 60) + b) - ((c * 60) + a);
// // console.log(dif);
// // if (dif <= 0) {
// //     dif = dif + 24 * 60;
// // }
// // console.log(dif);

// console.log(`O JOGO DUROU ${difH} HORA(S) E ${difM} MINUTO(S)`);

