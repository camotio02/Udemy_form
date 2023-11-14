const numeros  = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
]

for(let i of numeros){
    console.log(i)
    if(i / 2 === Number.isInteger(i)){
        console.log('ops',i)
    }
}