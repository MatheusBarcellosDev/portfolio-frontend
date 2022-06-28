import CardProjects from "../CardProjects";
import gifProjectAppRecipes from '../../assets/gifs/GifProjeto.gif'
import gifJogoTrivia from '../../assets/gifs/ProjetoJogoDeTrivia.gif'
import gifTrybeWallet from '../../assets/gifs/ProjetoTrybeWallet.gif'
import onlineStore from '../../assets/images/onlineStore.png'
import TryeTunes from '../../assets/gifs/TrybeTunes.gif'
import ProjetoTryunfo from '../../assets/gifs/ProjetoTryunfo.gif'
import ProjetoSolarSystem from '../../assets/gifs/ProjetoSolarSystem.gif'

const ProjectsContent = () => {
    return (
        <div className="projects-content">
            <CardProjects
                url="https://admiring-ritchie-b6d922.netlify.app/"
                title="Projeto App de Receitas"
                gif={gifProjectAppRecipes}
                description="Um app que permite aos usuários cadastrar receitas e receber sugestões de receitas."
                status="Finalizado"
            />
            <CardProjects
                url="https://bespoke-sunshine-49ec3a.netlify.app"
                title="Projeto Jogo Trivia"
                gif={gifJogoTrivia}
                description="Um jogo de perguntas e respostas que permite aos usuários jogar um jogo de perguntas e respostas."
                status="Finalizado"
            />
            <CardProjects
                url="https://glittering-llama-df75aa.netlify.app/"
                title="Projeto Trybe Wallet"
                gif={gifTrybeWallet}
                description="Um aplicativo que permite aos usuários cadastrar e gerenciar suas contas. E também faz a conversão de moedas."
                status="Finalizado"
            />
            <CardProjects
                url="https://starlit-cannoli-b54690.netlify.app"
                title="Projeto Online Store"
                gif={onlineStore}
                description="Uma aplicação que consome uma Api do Mercado Livre e adiciona os produtos na loja."
                status="Em desenvolvimento"
            />
            <CardProjects
                url="https://playful-gingersnap-49f946.netlify.app"
                title="Projeto Trybe Tunes"
                gif={TryeTunes}
                description="Uma aplicação que consome uma Api do Spotify e adiciona as músicas como favorita."
                status="Finalizado"
            />
            <CardProjects
                url="https://jade-griffin-466656.netlify.app/"
                title="Projeto Tryunfo"
                gif={ProjetoTryunfo}
                description="Uma aplicação feita para criar cartas super. É possivel tambem realizar o filtro das cartas cadastradas."
                status="Finalizado"
            />
            <CardProjects
                url="https://tubular-crisp-628639.netlify.app/"
                title="Projeto SolarSystem"
                gif={ProjetoSolarSystem}
                description="Essa aplicação simula uma visualização do Sistema Solar, bem como informações sobre diversas missões espacias que ocorreram ao longo da história."
                status="Finalizado"
            />        

        </div>

    )
}


export default ProjectsContent;