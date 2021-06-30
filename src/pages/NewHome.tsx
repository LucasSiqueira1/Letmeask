//imports react dom
import { Link } from 'react-router-dom'

//imports hooks
import { useAuth } from '../hooks/useAuth'

//images
import imagemIlustracao from '../assets/images/illustration.svg'
import imagemLogo from '../assets/images/logo.svg'

//scss
import '../styles/home.scss'

//components
import { Button } from '../components/Button'


export function NewHome() {
    const { usuario } = useAuth()
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
                    <h2>Crie uma nova sala</h2>

                    <form action="">
                        <input type="text" placeholder="Nome da sala" />
                        <Button type="submit">Criar Sala</Button>
                    </form>
                    <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}