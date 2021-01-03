module.exports = (req, res, next) => {

    // Adicionando cabeçalhos na resposta da requisição
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept')
    next() // continua o fluxo da aplicação 
}