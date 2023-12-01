function celularStatus() {
    const infos = {
        neverbeenconnected: true,
        on: false,
        off: false,
        timeOnAll: 0,
        bactery: 100,

        modelo: 'iPhone 15 Pro',
        cor: 'Prateado',
        capacidade: '256GB',
        sistemaOperacional: 'iOS 16',
        tela: {
            tamanho: '6.7 polegadas',
            tipo: 'Super Retina XDR',
            resolucao: '2778 x 1284 pixels'
        },
        camera: {
            principal: {
                quantidadeLentes: 4,
                megapixels: 108,
                recursos: ['Night mode', 'Deep Fusion', 'Smart HDR 4']
            },
            frontal: {
                megapixels: 40,
                recursos: ['Retina Flash', 'Night mode', '4K Dolby Vision HDR recording']
            }
        },
        bateria: {
            capacidade: '4500 mAh',
            carregamento: 'Carregamento rápido de 30W'
        },
        conectividade: ['5G', 'Wi-Fi 6', 'Bluetooth 5.2'],
        recursosAdicionais: ['Face ID', 'MagSafe', 'Resistência à água e poeira (IP68)'],
        preco: 'A partir de $1.299'
    }
    return infos;
}
export default celularStatus()