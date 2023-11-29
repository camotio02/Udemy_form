function rand(min = 1000, max = 3000) {
    const random = Math.random() * (max - min) + min;
    return random.toFixed(0);
}

function f1(callback) {
    setTimeout(() => {
        if (callback) callback()
        console.log('f1')
    }, rand())
}
function f2(callback) {
    setTimeout(() => {
        if (callback) callback()
        console.log('f2')
    }, rand())
}
function f3(callback) {
    setTimeout(() => {
        console.log('f3')
        if (callback) callback()
    }, rand())
}

f1(function () {
    f2(function () {
        f3(function () {
            console.log('Olá Mundo!')
        })
    })
})
