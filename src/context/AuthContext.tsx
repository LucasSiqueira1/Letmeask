//import react
import { createContext, ReactNode, useEffect, useState } from "react";

//banco
import { auth, firebase } from "../services/firebase";

//tipagem dos dados
type AuthContextType = {
    usuario: Usuario | undefined, //no primeiro momento não há usuário logado
    signInWithGoogle: () => Promise<void>
}

type Usuario = {
    id: string;
    name: string
    avatar: string
}
type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)


export function AuthContextProvider(props: AuthContextProviderProps) {
    const [usuario, setUsuario] = useState<Usuario>()

    useEffect(() => {
        const deslEvent = auth.onAuthStateChanged(usuario => {
            if (usuario) {
                const { displayName, photoURL, uid } = usuario

                if (!displayName || !photoURL) {
                    throw new Error('Faltando informação provindas de Google Account')
                }

                setUsuario({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        })

        return () => {
            deslEvent()
        }
    }, [])

    //api de contexto -> login
    async function signInWithGoogle() {
        const provedor = new firebase.auth.GoogleAuthProvider()
        const resultado = await auth.signInWithPopup(provedor)

        if (resultado.user) {
            const { displayName, photoURL, uid } = resultado.user

            if (!displayName || !photoURL) {
                throw new Error('Faltando informação provindas de Google Account')
            }

            setUsuario({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }
    }
    return (
        <AuthContext.Provider value={{ usuario, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
}