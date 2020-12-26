
const surpresinhaMega = (qtde = 6) => {

    
    if (qtde < 6) {
        return [];
    }

    let arr = Array.apply(null, Array(qtde))

    arr = arr.map((_, i, arrMap) => {
        let aleatorio = randomValue()

        while (arr.find(vlrArray => vlrArray === aleatorio)) {
            aleatorio = randomValue()
        }
        arrMap[i] = aleatorio

        return aleatorio;

    })

    arr.sort((itemAnterior, itemAtual) => {
        return itemAtual < itemAnterior ? 1 : itemAtual > itemAnterior ? -1 : 0;
    })

    return arr;

}

const randomValue = (min = 1, max = 60) => {
    return parseInt(Math.random() * (max - min+1)) + min;
}

export default surpresinhaMega