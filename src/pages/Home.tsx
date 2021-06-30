//images
import imagemIlustracao from '../assets/images/illustration.svg'
import imagemLogo from '../assets/images/logo.svg'
import imagemGoogle from '../assets/images/google-icon.svg'

//scss
import '../styles/home.scss'
import { Button } from '../components/Button'

export function Home() {
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
                    <button className="btn-home">
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