import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo real</p>
        <main>
          <div>
            <img src={logoImg} alt="Letmeask" />
            <button>
              <img src={googleIconImg} alt="logo do Google" />
              criar uma sala com google
            </button>
            <div>ou entre em uam sala</div>
            <form action="">
              <input
                type="text"
                placeholder='digite o código da sala'
              />
              <button type='submit'>
                entrar na sala
              </button>
            </form>
          </div>
        </main>
      </aside>
    </div>
  )
}