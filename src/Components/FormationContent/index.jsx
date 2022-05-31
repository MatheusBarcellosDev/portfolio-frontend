import React, { useState } from "react";
import TechnologiesLearned from "../CardSummaryTechnologiesLearned";
import { Container } from "./styled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";


import DemoCarousel from "../Carousel";

const FormationContent = () => {
  
  const [isOpenFundamentals, setIsOpenFundamentals] = useState(false);
  const [isOpenFrontEnd, setIsOpenFrontEnd] = useState(false);
  const [isOpenBackEnd, setIsOpenBackEnd] = useState(false);
  const [isOspenComputerScience, setIsOpenComputerScience] = useState(false);
  const [isOpenProgramation, setIsOpenProgramation] = useState(false);
  const [isOpenFrontEndAlura, setIsOpenFrontEndAlura] = useState(false);
  const [isOpenDevOps, setIsOpenDevOps] = useState(false);
  const [isOpenUx, setIsOpenUx] = useState(false);
  const [isOpenInovation, setIsOpenInovation] = useState(false);



  return (
    <>
      <Container>
        <div className="container-formations">
          <div className="container-formations-trybe">
          <div className="title-section">
            <h3>Formação Trybe</h3>
          </div>
          <div className="title-module">
            <h4 onClick={() => setIsOpenFundamentals(!isOpenFundamentals)}>
              Fundamentos do Desenvolvimento Web
            </h4>
            <div className="arrow">
              <span>
                {isOpenFundamentals ? (
                  <FontAwesomeIcon icon={faAnglesUp} />
                ) : (
                  <FontAwesomeIcon icon={faAnglesDown} />
                )}
              </span>
            </div>
          </div>
          <div className="container-summaryTechnologies">
            {isOpenFundamentals ? (
              <>
                <TechnologiesLearned
                  date="22 set 2021"
                  school="Trybe: Escola de Tecnologia"
                  technology="Unix & Bash"
                  resume="No desenvolvimento de software, 
                    é muito importante que você entenda como interagir de forma eficiente 
                    com o sistema operacional no qual você vai programar. Isso te poupará 
                    tempo e permitirá ser uma pessoa mais produtiva. Para isso, é primordial 
                    que você saiba os principais comandos que podem ser utilizados no terminal.
                    Na maioria das vezes, principalmente por questões de custo, performance e 
                    facilidade de interação através do terminal, sistemas operacionais baseados 
                    em Unix são indicados como a melhor opção para você hospedar seus projetos Web."
                />
                <TechnologiesLearned
                  date="24 set 2021"
                  school="Trybe: Escola de Tecnologia"
                  technology="Git, GitHub e Internet"
                  resume="O GitHub, ferramenta online que hospeda repositórios Git, é uma excelente 
                      ferramenta para toda a gestão do seu código, tendo recursos para acompanhamento 
                      de projeto ágil de software, controle de Issues, quadros Kanban, Pull Requests 
                      que permitem um Code Review mais bem feito, entre outras dezenas de integrações 
                      que vão facilitar sua vida com desenvolvimento de software."
                />
                <TechnologiesLearned
                  date="4 out 2021"
                  school="Trybe: Escola de Tecnologia"
                  technology="HTML Semântico e CSS"
                  resume="Para trabalhar com desenvolvimento web, não é estritamente necessário aprender 
                      HTML e CSS. Porém, no decorrer da sua carreira, certamente você vai se deparar 
                      com código e/ou aplicações inteiras que rodam no cliente. Então, o quanto antes 
                      você iniciar seu contato com as linguagens de marcação, estilo e comportamento 
                      utilizadas no cliente (por exemplo, os browsers), mais rápido irá desenvolver 
                      as habilidades necessárias para criar páginas web cada vez mais robustas!"
                />
                <TechnologiesLearned
                  date="8 out 2021"
                  school="Trybe: Escola de Tecnologia"
                  technology="Introdução à JavaScript e Lógica de Programação"
                  resume="JavaScript é popular. O JavaScript vem sendo, nos últimos 8 anos, 
                      a linguagem de programação mais popular do mundo, segundo a última pesquisa do Stack Overflow.
                      Ele é responsável pela grande maioria das interações em tempo real na web que é possível nos dias 
                      de hoje. Sabe quando você está em uma página com um chat, e as mensagens chegam sozinhas? Isso é 
                      JavaScript. Ou quando você acessa um perfil diferente no Facebook, mas seu navegador não carrega a 
                      página do zero, somente carregando o que de fato mudou? Também é JavaScript (com o React 🙂)."
                />
                <TechnologiesLearned
                  date="19 out 2021"
                  school="Trybe: Escola de Tecnologia"
                  technology=" JavaScript: DOM, Eventos e Web Storage "
                  resume="Uma das funcionalidades mais poderosas do JavaScript é a capacidade de 'reagir' 
              a eventos que acontecem em uma página web.Praticamente qualquer interação de quem usa com 
              a página pode ser considerada um evento. O rolar da tela, o passar do mouse por um elemento, 
              o click do mouse, o digitar do teclado, entre outros."
                />
                <TechnologiesLearned
                  date="28 out 2021"
                  school="Trybe: Escola de Tecnologia"
                  technology="HTML e CSS: Forms, Flexbox e Responsivo"
                  resume="Quantas vezes você já se deparou com um formulário de cadastro, uma página de login, 
              ou até mesmo precisou enviar um arquivo para o servidor? Isso é bem comum, não é mesmo? A 
              tag <form> do HTML, juntamente com seus elementos, te permite criar todos esses tipos de interação com o usuário.
              Após o curso da Trybe, no seu dia a dia de trabalho, será comum encontrar tarefas que, no fim das contas, 
              são de criação de formulário. Por isso, é importante entender como um formulário funciona."
                />
                <TechnologiesLearned
                  date="11 nov 2021"
                  school="Trybe: Escola de Tecnologia"
                  technology="Introdução à JavaScript ES6 e Testes Unitários"
                  resume="O let e o const vieram como solução para um antigo 
              problema do JavaScript de falta de definição de escopo de variáveis. 
              Sabe quando você declara uma variável dentro de um bloco e depois a 
              utiliza fora dele? Isso é um vazamento de variável. Esse problema sempre 
              trouxe grandes prejuízos, principalmente para aplicações maiores. 
              Saber utilizar o let e o const de maneira consistente irá te ajudar a ter 
              um código mais confiável e previsível."
                />
                <TechnologiesLearned
                  date="11 nov 2021"
                  school="Trybe: Escola de Tecnologia"
                  technology="Introdução à JavaScript ES6 e Testes Unitários"
                  resume="O let e o const vieram como solução para um antigo 
              problema do JavaScript de falta de definição de escopo de variáveis. 
              Sabe quando você declara uma variável dentro de um bloco e depois a 
              utiliza fora dele? Isso é um vazamento de variável. Esse problema sempre 
              trouxe grandes prejuízos, principalmente para aplicações maiores. 
              Saber utilizar o let e o const de maneira consistente irá te ajudar a ter 
              um código mais confiável e previsível."
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="title-module">
            <h4 onClick={() => setIsOpenFrontEnd(!isOpenFrontEnd)}>
              Desenvolvimento Front-end
            </h4>
            <div className="arrow">
              <span>
                {isOpenFrontEnd ? (
                  <FontAwesomeIcon icon={faAnglesUp} />
                ) : (
                  <FontAwesomeIcon icon={faAnglesDown} />
                )}
              </span>
            </div>
          </div>
          <div className="container-summaryTechnologies">
            {isOpenFrontEnd ? (
              <>
                <TechnologiesLearned
                  date="30 Nov 2021"
                  school="Trybe: Escola de Tecnologia"
                  technology="JavaScript e Testes Assíncronos"
                  resume="A comunicação com serviços de terceiros 
              é parte do dia a dia de qualquer pessoa que programa.
              Seja para coletar tweets, seja para abrir um mapa do Google Maps, 
              ou até mesmo se comunicar com um banco de dados ou serviço interno 
              da organização, APIs são sempre a forma de se fazer isso. Entender 
              o que são e como usá-las, ou seja, como fazer sua aplicação se comunicar 
              com elas, é absolutamente fundamental. Hoje você entrará em contato com esse 
              conceito e o praticará por todo o restante do curso.
              "
                />
                <TechnologiesLearned
                  date="9 Dez 2021"
                  school="Trybe: Escola de Tecnologia"
                  technology="Introdução à React"
                  resume="Uma aplicação desenvolvida em React é composta de componentes. 
              Ou seja, eles são as peças de lego que serão combinadas de forma a construir toda a 
              aplicação! Logo, saber usar componentes é saber montar do zero uma aplicação React. 
              A checagem de tipos é outra parte disso: ela economiza muito tempo de desenvolvimento, 
              protegendo quem desenvolve de cometer erros facilmente evitáveis na utilização dos 
              componentes."
                />
                <TechnologiesLearned
                  date="5 Jan 2022"
                  school="Trybe: Escola de Tecnologia"
                  technology="Componentes com Estado, Eventos e Formulários com React"
                  resume="O estado dos componentes é o que dá dinamismo às páginas do React, 
              de acordo com a interação de quem usa. Ele é uma abstração essencial para o 
              desenvolvimento de páginas mais ricas e interativas, que respondem a inputs do usuário 
              e se atualizam em função disso. Se os componentes são a faca do React, o estado e os 
              eventos são o queijo. Com os três, você vai ter a faca e o queijo na mão para desenvolver 
              páginas tão interessantes e complexas como hoje você nem imagina!"
                />
                <TechnologiesLearned
                  date="11 Jan 2022"
                  school="Trybe: Escola de Tecnologia"
                  technology="Ciclo de Vida de Componentes e React Router"
                  resume="Imagine que seu componente nem sequer apareceu na tela da pessoa que utiliza sua página 
              e que você já pediu para atualizar algum elemento gráfico contido no componente. Esse elemento 
              gráfico que você tentou acessar ainda não existe, então esse pedido foi um desperdício de tempo e
               recursos do computador, concorda? Mas qual o problema disso? Se você enquanto pessoa que programa 
              o software não se preocupar com o momento em que cada recurso deve ser utilizado (recursos são finitos), 
              você provavelmente vai estar utilizando mal esses recursos."
                />
                <TechnologiesLearned
                  date="18 Jan 2022"
                  school="Trybe: Escola de Tecnologia"
                  technology="Metodologias Ágeis"
                  resume="A metodologia ágil é, quando aplicada no contexto correto, mais produtiva e eficaz 
              que os modelos tradicionais. Em desenvolvimento de software, é quase certo que você irá 
              trabalhar a maior parte do tempo em um time que aplique práticas ágeis, ou mesmo um 
              framework completo."
                />
                <TechnologiesLearned
                  date="25 Jan 2021"
                  school="Trybe: Escola de Tecnologia"
                  technology="Testes automatizados com React Testing Library"
                  resume="A vantagem de testes automatizados é evidente. Em React não é diferente, então é muito 
              importante ser capaz de escrever bons testes automatizados para ele. A biblioteca react-testing-library 
              tem as seguintes vantagens quando comparada com a enzyme, outra opção com grande adoção no mercado:"
                />
                <TechnologiesLearned
                  date="02 Fev 2022"
                  school="Trybe: Escola de Tecnologia"
                  technology="Gerenciamento de estado com Redux"
                  resume="Quando você, enquanto pessoa que desenvolve software, passa a adotar uma abordagem 
              como a do Redux, significa que você está levando a um outro nível a organização do seu código, 
              endereçando a problemática do parágrafo acima, se preocupando em como transitar as informações 
              entre os componentes e deixando seu código mais organizado e com maior confiabilidade."
                />
                <TechnologiesLearned
                  date="21 Fev 2021"
                  school="Trybe: Escola de Tecnologia"
                  technology=" Context API e React Hooks"
                  resume="Você já aprendeu os principais conceitos que envolvem uma aplicação React: componentes, 
              props, estado, children, proptypes, lifecycle methods etc. Aprendeu também a utilizar algumas 
              bibliotecas externas que simplificam algumas tarefas muito frequentes em React, como roteamento 
              e gerenciamento de estado. Com isso, você já é capaz de construir aplicações React complexas e
              plenamente funcionais."
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="title-module">
            <h4 onClick={() => setIsOpenBackEnd(!isOpenBackEnd)}>
              Desenvolvimento Back-end
            </h4>
            <div className="arrow">
              <span>
                {isOpenBackEnd ? (
                  <FontAwesomeIcon icon={faAnglesUp} />
                ) : (
                  <FontAwesomeIcon icon={faAnglesDown} />
                )}
              </span>
            </div>
          </div>
          <div className="container-summaryTechnologies">
            {isOpenBackEnd ? (
              <>
                <TechnologiesLearned
                  date="23 Mar 2022"
                  school="Trybe: Escola de Tecnologia"
                  technology="Docker: Utilizando Containers"
                  resume="Fazer isso nem sempre é uma tarefa simples. O processo fica ainda mais complexo 
              quando há múltiplos ambientes, distintos entre si, e também a necessidade de rodar em
              diversas máquinas com configurações e sistemas operacionais diferentes — que inclui 
              sua máquina pessoal local, servidores externos pagos e mesmo uma máquina virtual."
                />
                <TechnologiesLearned
                  date="30 Mar 2022"
                  school="Trybe: Escola de Tecnologia"
                  technology="Introdução à SQL"
                  resume="Atualmente, a análise de dados é indispensável para empresas e pessoas em 
              processos de tomada de decisão. Essa é uma das maneiras mais eficientes de gerar 
              conhecimento, tanto utilizando dados passados quanto fazendo projeções futuras."
                />
                <TechnologiesLearned
                  date="6 Abr 2022"
                  school="Trybe: Escola de Tecnologia"
                  technology="Funções SQL, JOINs e Normalização"
                  resume="Os comandos e funcionalidades que você verá hoje permitirão que você encontre 
              informações estatísticas e informações relativas ao tempo. Além disso, ao saber controlar o 
              fluxo de uma query utilizando condicionais, você será capaz de tratar diferentes cenários em 
              uma única consulta.Um cenário real, por exemplo, em uma aplicação de chat: Você pode 
              precisar obter o número de mensagens com um agrupamento por dia a fim de avaliar o 
              engajamento das pessoas usuárias."
                />
                <TechnologiesLearned
                  date="13 Abr 2022"
                  school="Trybe: Escola de Tecnologia"
                  technology="Introdução ao desenvolvimento Web com Node.js"
                  resume="O conhecimento de Node.js tem sido cada vez mais valorizado no mercado de trabalho. 
              A cada dia, mais empresas vem utilizando essa tecnologia para desenvolver suas aplicações 
              Back-End. Como resultado, a demanda por pessoas capacitadas em Node.js tem aumentado.
              Não é à toa que a adoção do Node.js como tecnologia Back-end vem crescendo."
                />
                <TechnologiesLearned
                  date="02 Mai 2022"
                  school="Trybe: Escola de Tecnologia"
                  technology=" Node.js: Camada de Serviço e Arquitetura Rest e Restful"
                  resume="A intenção desse tema é iniciar sua visão arquitetural. Além disso, dividir sua 
              aplicação em camadas facilita muito a manutenção, a adição de novas funcionalidades e a 
              organização geral do seu código, pois você sabe exatamente onde cada coisa deve ficar.
              Quanto mais padrões você conhecer e quanto mais entender em quais cenários cada um 
              melhor se aplica, maiores serão as chances do seu projeto ter sucesso."
                />
                <TechnologiesLearned
                  date="16 Mai 2021"
                  school="Trybe: Escola de Tecnologia"
                  technology="Node.js: ORM e Autenticação"
                  resume="As bibliotecas que trabalham com ORM, como o Sequelize, que mencionaremos aqui, 
              abstraem as funções do banco de dados. Isso significa que essas bibliotecas ocultam parte da 
              complexidade dessas funções e as envelopam numa função de uso mais ágil e intuitivo. 
              É esse processo que facilita o seu trabalho como pessoa desenvolvedora, pois otimiza a 
              manutenção do código e o deixa menos suscetível a erros"
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="title-module">
            <h4
              onClick={() => setIsOpenComputerScience(!isOspenComputerScience)}
            >
              Ciência da Computação
            </h4>
            <div className="arrow">
              <span>
                {isOspenComputerScience ? (
                  <FontAwesomeIcon icon={faAnglesUp} />
                ) : (
                  <FontAwesomeIcon icon={faAnglesDown} />
                )}
              </span>
            </div>
          </div>
          </div>
          <div className="container-formations-alura">
          <div className="title-section">
            <h3>Formação Alura</h3>
          </div>
          <div className="title-module">
            <h4 onClick={() => setIsOpenProgramation(!isOpenProgramation)}>
              Programação - 72hs
            </h4>
            <div className="arrow">
              <span>
                {isOpenProgramation ? (
                  <FontAwesomeIcon icon={faAnglesUp} />
                ) : (
                  <FontAwesomeIcon icon={faAnglesDown} />
                )}
              </span>
            </div>
          </div>
          <div className="container-summaryTechnologies">
            {isOpenProgramation ? (
              <>
                <TechnologiesLearned
                  date="17 Dez 2020"
                  school="Alura Ensino Online"
                  technology="Lógica de programação I: crie programas com Javascript e HTML 16hrs"
                  resume="Na lógica de programação é onde aplicamos todos os conceitos de algoritmos, 
              a definição do passo a passo e transferimos toda a lógica do algoritmo desenvolvido 
              para uma linguagem de programação.Em linhas gerais, lógica de programação é todo 
              conjunto de regras e conceitos que precisamos aplicar para criar códigos que serão 
              interpretados e executados por um computador."
                />
                <TechnologiesLearned
                  date="20 Dez 2020"
                  school="Alura Ensino Online"
                  technology="Lógica de programação II: pratique com desenhos, animações e um jogo 10hrs"
                  resume="Na lógica de programação é onde aplicamos todos os conceitos de algoritmos, 
              a definição do passo a passo e transferimos toda a lógica do algoritmo desenvolvido 
              para uma linguagem de programação.Em linhas gerais, lógica de programação é todo 
              conjunto de regras e conceitos que precisamos aplicar para criar códigos que serão 
              interpretados e executados por um computador."
                />
                <TechnologiesLearned
                  date="27 Dez 2020"
                  school="Alura Ensino Online"
                  technology="Python 3 parte 1: Trabalhando com a nova versão da linguagem 12hrs"
                  resume="É uma das linguagens que mais tem crescido devido sua compatibilidade 
              (roda na maioria dos sistemas operacionais) e capacidade de auxiliar outras linguagens. 
              Programas como Dropbox, Reddit e Instagram são escritos em Python. Python também é a 
              linguagem mais popular para análise de dados e conquistou a comunidade científica."
                />
                <TechnologiesLearned
                  date="18 Jan 2021"
                  school="Alura Ensino Online"
                  technology="Python 3 parte 2: avançando na linguagem 12hrs"
                  resume="É uma das linguagens que mais tem crescido devido sua compatibilidade 
              (roda na maioria dos sistemas operacionais) e capacidade de auxiliar outras linguagens. 
              Programas como Dropbox, Reddit e Instagram são escritos em Python. Python também é a 
              linguagem mais popular para análise de dados e conquistou a comunidade científica."
                />
                <TechnologiesLearned
                  date="02 Mar 2021"
                  school="Alura Ensino Online"
                  technology="Python 3: Entendendo a Orientação a objetos 12hrs"
                  resume="É uma das linguagens que mais tem crescido devido sua compatibilidade 
              (roda na maioria dos sistemas operacionais) e capacidade de auxiliar outras linguagens. 
              Programas como Dropbox, Reddit e Instagram são escritos em Python. Python também é a 
              linguagem mais popular para análise de dados e conquistou a comunidade científica."
                />
                <TechnologiesLearned
                  date="22 Dez 2020"
                  school="Alura Ensino Online"
                  technology="Jogos clássicos parte 1: Pong com Javascript 6hrs"
                  resume="*Pong no Scratch 
              *Iniciando no javascript
              *Criando minha raquete no jogo
              *Criando a raquete do oponente
              *Editando placar e adicionando sons"
                />
                <TechnologiesLearned
                  date="23 Dez 2020"
                  school="Alura Ensino Online"
                  technology="Jogos clássicos parte 2: laços e listas com Javascript 4hrs"
                  resume="*Iniciando o projeto
              *Dividindo o código e carros para sempre
              *Listas e laços de repetição
              *Colisão, + carros e pontos
              *Adicionando sons e pontos negativos"
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="title-module">
            <h4 onClick={() => setIsOpenFrontEndAlura(!isOpenFrontEndAlura)}>
              Front-end - 85hs
            </h4>
            <div className="arrow">
              <span>
                {isOpenFrontEndAlura ? (
                  <FontAwesomeIcon icon={faAnglesUp} />
                ) : (
                  <FontAwesomeIcon icon={faAnglesDown} />
                )}
              </span>
            </div>
          </div>
          <div className="container-summaryTechnologies">
            {isOpenFrontEndAlura ? (
              <>
                <TechnologiesLearned
                  date="07 Mai 2021"
                  school="Alura Ensino Online"
                  technology="Flexbox: posicione elementos na tela 9hrs"
                  resume="O flexbox é um layout responsivo que permite que os elementos sejam
              posicionados de forma dinâmica e flexível. Ele permite que os elementos sejam
              posicionados de forma dinâmica e flexível, de acordo com o tamanho da tela.
              "
                />
                <TechnologiesLearned
                  date="01 Abr 2021"
                  school="Alura Ensino Online"
                  technology="JavaScript: programando na linguagem da web 20hrs"
                  resume="A linguagem JavaScript é uma linguagem de programação de alto nível,
              que permite a criação de aplicações web. É uma linguagem interpretada,
              por isso, não é necessário compilar o código para executá-lo.
              "
                />
                <TechnologiesLearned
                  date="06 Mai 2021"
                  school="Alura Ensino Online"
                  technology="CSS Grid: simplificando layouts 8hrs"
                  resume="O CSS Grid é um layout responsivo que permite que os elementos sejam
              posicionados de forma dinâmica e flexível. Ele permite que os elementos sejam
              posicionados de forma dinâmica e flexível, de acordo com o tamanho da tela.
              "
                />
                <TechnologiesLearned
                  date="24 Dez 2020"
                  school="Alura Ensino Online"
                  technology="HTML5 e CSS3 parte 1: crie uma página da Web 8hrs"
                  resume="O HTML é uma linguagem de marcação para a criação de páginas web."
                />
                <TechnologiesLearned
                  date="08 Mai 2021"
                  school="Alura Ensino Online"
                  technology="Arquitetura CSS: descomplicando os problemas"
                  resume="*Layout base e Estilização de cabeçalho
              *Estilização de Banner e Sobre
              *Estilização das Receitas
              *Estilização do Quem Somos
              *Estilização do rodapé e Responsividade do site
              "
                />
                <TechnologiesLearned
                  date="07 Abr 2021"
                  school="Alura Ensino Online"
                  technology="JavaScript: explorando a linguagem"
                  resume="*Introdução a linguagem
              *Tipos de variáveis
              *Trabalhando com muitos elementos
              *Condicionais e fluxo de execução
              *Iterando sobre coleções
              "
                />
                <TechnologiesLearned
                  date="09 Abr 2021"
                  school="Alura Ensino Online"
                  technology="JavaScript: programando a Orientação a Objetos"
                  resume="*Repetição de código
              *Adicionando comportamentos
              *Modularizando código
              *Acessando Atributos privados
              *Construtores e estáticos
              "
                />
                <TechnologiesLearned
                  date="22 Mai 2021"
                  school="Alura Ensino Online"
                  technology="React: entendendo como a biblioteca funciona"
                  resume="*Criando o projeto
              *Componentizando o sistema
              *Estilizando componentes
              *Lidando com eventos e propriedades
              *Controlando o estado e a renderização
              "
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="title-module">
            <h4 onClick={() => setIsOpenDevOps(!isOpenDevOps)}>DevOps - 4hs</h4>
            <div className="arrow">
              <span>
                {isOpenDevOps ? (
                  <FontAwesomeIcon icon={faAnglesUp} />
                ) : (
                  <FontAwesomeIcon icon={faAnglesDown} />
                )}
              </span>
            </div>
          </div>
          <div className="container-summaryTechnologies">
            {isOpenDevOps ? (
              <>
                <TechnologiesLearned
                  date="10 Mar 2021"
                  school="Alura Ensino Online"
                  technology="Linux I: conhecendo e utilizando o terminal 4hrs"
                  resume="O terminal é um programa que permite que você execute comandos
              de sistema operacional. Ele é um programa que permite que você execute comandos
              de sistema operacional.
              "
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="title-module">
            <h4 onClick={() => setIsOpenUx(!isOpenUx)}>UX & Design - 10hs</h4>
            <div className="arrow">
              <span>
                {isOpenUx ? (
                  <FontAwesomeIcon icon={faAnglesUp} />
                ) : (
                  <FontAwesomeIcon icon={faAnglesDown} />
                )}
              </span>
            </div>
          </div>
          <div className="container-summaryTechnologies">
            {isOpenUx ? (
              <>
                <TechnologiesLearned
                  date="09 Mai 2021"
                  school="Alura Ensino Online"
                  technology="Figma: design visual de um site mobile 10hrs"
                  resume="*Pesquisa e organização
              *Conhecendo a arquitetura da informação
              *Criação do wireframe
              *Inserindo conteúdo realista
              *Prototipagem e conclusão
              "
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="title-module">
            <h4 onClick={() => setIsOpenInovation(!isOpenInovation)}>
              Inovação & Gestão - 6hs
            </h4>
            <div className="arrow">
              <span>
                {isOpenInovation ? (
                  <FontAwesomeIcon icon={faAnglesUp} />
                ) : (
                  <FontAwesomeIcon icon={faAnglesDown} />
                )}
              </span>
            </div>
          </div>
          <div className="container-summaryTechnologies">
            {isOpenInovation ? (
              <>
                <TechnologiesLearned
                  date="12 Out 2021"
                  school="Alura Ensino Online"
                  technology="Agilidade: promovendo a transformação ágil"
                  resume="*O Método Ágil
              *O Método Waterfall
              *Priorização
              *Fluxos
              *Rápido Feedback
              *O que é ser Ágil
              *O Manifesto Ágil
              *Cases do Método Ágil
              "
                />
              </>
            ) : (
              <></>
            )}
          </div>
          </div>
        </div>
        <div className="title-section certificate">
          <h3>Certificados</h3>
        </div>
        <div className="container-carousel">
          <DemoCarousel />
        </div>
      </Container>
    </>
  );
};

export default FormationContent;
