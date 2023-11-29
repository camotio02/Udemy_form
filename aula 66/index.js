const upadatDate = () => {
    const data = new Date();
    return (

        data.toLocaleTimeString('pt-BR', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })

    )
}
setInterval(() => {
    console.log(upadatDate())
}, 1000)