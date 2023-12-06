const alertComponent = () => {


    return `
        <div class="alert">
            <div class="titleAlert">
                🚨Avisos do sistema🚨:
            </div>
            <div class="messageAlert">
                Manter seu celular com uma carga saudável não apenas garante uma experiência de uso contínua, mas também contribui para a longevidade da bateria
                Por favor, conecte seu celular a um carregador e monitore o carregamento. Se persistirem problemas, considere verificar o cabo, adaptador ou a própria bateria.
            </div>
            <div class="bottonsAlert">
                <button class="cancel">Cancelar</button>
                <button class="ok">Ok</button>
            </div>
        </div>
    `
}
export default alertComponent;