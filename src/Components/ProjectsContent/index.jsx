import CardProjects from "../CardProjects";
import gifProjectAppRecipes from '../../assets/gifs/GifProjeto.gif'
import gifJogoTrivia from '../../assets/gifs/ProjetoJogoDeTrivia.gif'
import gifTrybeWallet from '../../assets/gifs/ProjetoTrybeWallet.gif'
import onlineStore from '../../assets/images/onlineStore.png'

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
                url="https://glittering-llama-df75aa.netlify.app/"
                title="Online Store"
                gif={onlineStore}
                description="Uma aplicacao que consome uma Api do Mercado Livre e adiciona os produtos na loja."
                status="Em desenvolvimento"
            />  

        </div>

    )
}


export default ProjectsContent;