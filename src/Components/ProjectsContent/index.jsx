import CardProjects from "../CardProjects";
import gifProjectAppRecipes from '../../assets/gifs/GifProjeto.gif'
import gifJogoTrivia from '../../assets/gifs/ProjetoJogoDeTrivia.gif'
import gifTrybeWallet from '../../assets/gifs/ProjetoTrybeWallet.gif'
import onlineStore from '../../assets/images/onlineStore.png'
import TryeTunes from '../../assets/gifs/TrybeTunes.gif'
import ProjetoTryunfo from '../../assets/gifs/ProjetoTryunfo.gif'
import ProjetoSolarSystem from '../../assets/gifs/ProjetoSolarSystem.gif'
import ProjetoShoppingCart from '../../assets/gifs/ProjetoShoppingCart.gif'
import ProjetoTrybeWarts from '../../assets/gifs/ProjetoTrybeWarts.gif'
import ProjetoTodo from '../../assets/gifs/ProjetoTodo.gif'

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
            <CardProjects
                url="https://wonderful-frangollo-199059.netlify.app"
                title="Projeto Shoping Cart"
                gif={ProjetoShoppingCart}
                description="Uma aplicação que consome a api do mercado-livre e adiciona os produtos no carrinho."
                status="Finalizado"
            />
            <CardProjects
                url="https://stirring-starlight-e11340.netlify.app"
                title="Projeto Trybe Warts"
                gif={ProjetoTrybeWarts}
                description="Um aplicação que permite o usuário se cadastrar na escola Trybe Warts."
                status="Finalizado"
            />
            <CardProjects
                url="https://gorgeous-moonbeam-af7418.netlify.app"
                title="Projeto Todo list Trybe"
                gif={ProjetoTodo}
                description="Uma aplicação que permite o usuário cadastrar tarefas."
                status="Finalizado"
            />      

        </div>

    )
}


export default ProjectsContent;