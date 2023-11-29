// function params(){
//     for (let i of arguments){
//         console.log(i)
//     }
// }
// params(1,2,3,4,5,6,7,8,9)
function dublica(numero) {
    function triplica(n) {
        return numero * n
    }
    return triplica;
}
const numero = dublica(2);
console.log(numero(10)) 