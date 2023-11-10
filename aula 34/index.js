
const lines = 1000;
for (let i = 0; i <= lines; i++) {
    const verificaRaizQuadradaENumeroInteiro = Number.isInteger(Math.sqrt(i));
    console.log((verificaRaizQuadradaENumeroInteiro) ? Math.sqrt(i) : NaN);
}