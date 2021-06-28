import { useState } from "react"

export function Button() {
    //let contador = 0
    /*criação de estado para alterar algo*/
    const [contador, alterarContador] = useState(0) //retorna vetor com 2 posições, numero e funcao

    function increment() {
        alterarContador(contador + 1)
    }

    return (
        <button onClick={increment}>{contador}</button>
    )
}