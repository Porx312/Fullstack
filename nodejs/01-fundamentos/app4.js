console.log('Inicio del programa'); //1

setTimeout(() => {
    console.log('setTimeout ejecutado'); //4
}, 0);

setImmediate(() => {
    console.log('setImmediate ejecutado');//5
});

process.nextTick(() => {
    console.log('process.nextTick ejecutado'); //3
});

console.log('Fin del programa'); // 2