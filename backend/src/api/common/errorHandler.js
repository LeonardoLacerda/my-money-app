const _ = require('lodash') //referência padrão pro lodash é um underline

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})       
    } else {
        //Importante chamar o next porque estamos tratando de um middleware. 
        //Caso não chame o next, ele não irá para o próximo middleware, irá parar a operação.
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}