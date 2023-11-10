alert('opasas')
const res = confirm('Certeza que esse curso foi pago?')
console.log(res)
if(res){
    let message = prompt('diz o seu motivo da saida!')
    if(!message){
        message = prompt('diz o seu motivo da saida!')
    }
    console.log(message)
}
