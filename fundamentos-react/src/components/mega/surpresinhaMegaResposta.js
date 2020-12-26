function gerarNumeros(qtde) {
    return Array(qtde).fill(0).reduce((nums) => {
        const novoNumero = gerarNumerosNaoContido(1, 60, nums)
        return [ ...nums, novoNumero]
    }, []).sort((n1, n2) => n1 - n2)
}

function gerarNumerosNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max+1-min)) + min
    return array.includes(aleatorio) ? gerarNumerosNaoContido(min, max, array) : aleatorio
}