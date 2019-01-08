import React from 'react'

export default props => {
    if(props.test) {
        return props.children
    } else {
        return false //importante dar o return false. Se não der o return false ele retorna nulo e da problema
    }
}