//imports react dom
import { useHistory } from 'react-router-dom'

//imports hooks
import { useAuth } from '../hooks/useAuth'

//images
import imagemIlustracao from '../assets/images/illustration.svg'
import imagemLogo from '../assets/images/logo.svg'
import imagemGoogle from '../assets/images/google-icon.svg'

//scss
import '../styles/home.scss'

//components
import { Button } from '../components/Button'



export function Home() {

    const history = useHistory()
    const { usuario, signInWithGoogle } = useAuth()


    async function navToRoom() {
        if (!usuario) {
            await signInWithGoogle()
        }
        history.push('/rooms/new')
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={imagemIlustracao} alt="Ilustração Home" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas em tempo real pelas salas!!!!!</p>
            </aside>

            <main>
                <div className="conteudoMain">
                    <img src={imagemLogo} alt="Logo do Site" />
                    <button onClick={navToRoom} className="btn-home">
                        <img src={imagemGoogle} alt="Logo Google" />
                        Crie sua sala com sua conta Google
                    </button>

                    <div className="separador">ou entre em um sala</div>

                    <form action="">
                        <input type="text" placeholder="Digite o código da sala" />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}