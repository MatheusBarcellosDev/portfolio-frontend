import CardSkills from "../CardHardSkillsAndSoftSkills";
import { Container } from "./styled";

import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { SiStyledcomponents } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const HardSkills = () => {
    return (
        <Container>
            <div className="title-hardSkills">
                <h2>Hard Skills</h2>
            </div>
            <div className="container-hardSkills">
                <CardSkills 
                    icone={<AiFillHtml5 size={45} color={'007ced'}/>}
                    title="Html"
                    content="A Linguagem de Marcação de Hipertexto (HTML) é uma linguagem 
                            de computador que compõe a maior parte das páginas da internet 
                            e dos aplicativos online. Um hipertexto é um texto usado para 
                            fazer referência a outros textos, enquanto uma linguagem de marcação 
                            é composta por uma série de marcações que dizem para os servidores 
                            da web qual é o estilo e a estrutura de um documento."
                />
                <CardSkills
                    icone={<SiStyledcomponents size={45} color={'007ced'}/>}
                    title="Styled-Components"
                    content="Styled-components é uma biblioteca para React e React Native que permite 
                    que você use estilos ao nível de componente na sua aplicação. Eles são escritos
                    em uma mistura de JavaScript com CSS."
                />
                <CardSkills
                    icone={<IoLogoJavascript size={45} color={'007ced'}/>}
                    title="Javascript"
                    content="JavaScript é uma linguagem de programação de alto nível criada, a princípio, 
                            para ser executada em navegadores e manipular comportamentos de páginas web."
                />
                <CardSkills
                    icone={<FaNode size={45} color={'007ced'}/>}
                    title="Node"
                    content="Node.js é um software de código aberto, multiplataforma, baseado no interpretador 
                    V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web."
                />
                <CardSkills
                    icone={<FaReact size={45} color={'007ced'}/>}
                    title="React"
                    content="O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces 
                    de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade 
                    de desenvolvedores individuais."
                />
                <CardSkills
                    icone={<GrDocker size={45} color={'007ced'}/>}
                    title="Docker"
                    content="Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de 
                    nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres 
                    são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração."
                />
                <CardSkills
                    icone={<AiOutlineConsoleSql size={45} color={'007ced'}/>}
                    title="SQL"
                    content="SQL significa “Structured Query Language”, ou “Linguagem de Consulta Estruturada”, em português. 
                    Resumidamente, é uma linguagem de programação para lidar com banco de dados relacional (baseado em tabelas).
                    Foi criado para que vários desenvolvedores pudessem acessar e modificar dados de uma empresa simultaneamente, 
                    de maneira descomplicada e unificada."
                />
                <CardSkills
                    icone={<SiTypescript size={40} color={'007ced'}/>}
                    title="Typescript"
                    content="TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. 
                    É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem."
                />
            </div>
            <div>

            </div>
        </Container>
    )
}

export default HardSkills;
