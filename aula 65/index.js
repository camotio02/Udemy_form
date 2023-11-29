const showDate = (data) => {
    if (data && !(data instanceof Date)) {
        return (new Error("Invalid date"))
    }
    if (!data) {
        data = new Date()
        return (
            data.toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            })
        )
    }
}
console.log(showDate())