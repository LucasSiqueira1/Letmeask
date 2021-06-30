//import { useState } from "react"
import { ButtonHTMLAttributes } from 'react'
import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> //global

export function Button(props: ButtonProps) {
    //let contador = 0
    /*criação de estado para alterar algo*/
    //const [contador, alterarContador] = useState(0) //retorna vetor com 2 posições, numero e funcao

    //function increment() {
    //  alterarContador(contador + 1)
    //}

    return (
        <button className="button" {...props} /> //vai pegar cada um das props e repassar aqui
    )
}