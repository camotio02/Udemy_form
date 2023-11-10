
function random(min, max) {
    const rand = Math.random() * (max - min) + min;

    return rand
}
let meusPontos = 0;
const tentativa = 4;
let temp;
let rand = Number(random(0, 6).toFixed(0));
if (rand === tentativa) {
    console.log("parabens você ganhou 1 ponto" + "seu pontos passaram para: " +( meusPontos + 10))
    return;
} else (
    console.log("Ops! fica para próxima... hiiiiiii" + "pois o valor é: " + rand),
    console.log("Ops! pontos cairam meu irmão para: " + (meusPontos - 15))
)
