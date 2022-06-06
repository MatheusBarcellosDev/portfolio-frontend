import CardSkills from "../CardHardSkillsAndSoftSkills";
import { Container } from "./styled";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { BsFillLightbulbFill } from "react-icons/bs";

import { FaHandsHelping } from "react-icons/fa";

import { MdPsychology } from "react-icons/md";

import { AiFillWechat } from "react-icons/ai";

import { TiGroup } from "react-icons/ti";

const SoftSkills = () => {
  return (
    <Container>
      <div className="title-softSkills">
        <h2>Soft Skills</h2>
      </div>
      <div className="container-hardSkills">
        <CardSkills
          icone={<BsEmojiLaughingFill size={45} color={"007ced"} />}
          title="Inteligência Emocional"
          content="A inteligência emocional permite que,
          Nos conectemos com as nossas próprias emoções e aprendamos como usar os nossos sentimentos de forma mais produtiva, para tomar decisões mais assertivas.
          Superemos pensamentos negativos e sejamos capazes de nos controlar em situações tensas, imprevistas ou voláteis.
          Compreendamos melhor as pessoas quando elas agem de um jeito que nos surpreende ou nos irrita.
          Estabeleçamos relacionamentos mais produtivos e ampliemos a nossa capacidade de influência.
          Melhoremos o nosso bem-estar e qualidade de vida."
        />
        <CardSkills
          icone={<AiFillWechat size={45} color={"007ced"} />}
          title="Comunicação"
          content="Escutar costuma ser uma habilidade subestimada. Mas essa capacidade é uma das mais importantes para o nosso desenvolvimento pessoal e profissional, 
          porque aprender novos modos de escuta significa descobrir outras maneiras de nos relacionarmos com o mundo.Quando falamos em “escutar”, não estamos exatamente 
          nos referindo ao que captamos pelos ouvidos. No nosso contexto, pessoas surdas também podem ouvir. Porque aqui escuta significa conseguir prestar atenção no que outras pessoas comunicam."
        />
        <CardSkills
          icone={<FaHandsHelping size={45} color={"007ced"} />}
          title="Colaboração"
          content="A resposta é simples: a indústria de software entende a colaboração como um dos seus pilares. Afinal, em um cenário global competitivo, o trabalho colaborativo permite que as empresas 
          atendam clientes exigentes de forma integrada, respondam rapidamente a ambientes em constante mudança e inovem com agilidade"
        />
        <CardSkills
          icone={<MdPsychology size={45} color={"007ced"} />}
          title="Pensamento Crítico"
          content=" O pensamento crítico é importante para devs porque:
          Conseguimos refletir sobre o nosso próprio pensamento;
          Conseguimos ter disciplina e aplicar o nosso raciocínio para a resolução de problemas, focando nos objetivos, e não nos obstáculos;
          Quando falamos de desenvolvimento de códigos, o mesmo problema pode ter várias soluções. Por isso, o pensamento crítico é importante: ele nos ajuda a conseguir comparar as possibilidades.
          Através do pensamento crítico conseguimos identificar problemas de maneira precisa e assertiva, e também somos capazes de antecipar possíveis problemas;
          Quem desenvolve o pensamento crítico torna-se capaz de distinguir informações importantes para a resolução de problemas, tomada de decisão e raciocínio lógico."
        />
        <CardSkills
          icone={<BsFillLightbulbFill size={45} color={"007ced"} />}
          title="Criatividade"
          content="Desde a pré-história, a criatividade está presente em tudo que nós fazemos: o desenvolvimento das artes, da linguagem, da religião e mesmo das mais diversas tecnologias, como a agricultura, 
          a roda, o dinheiro e tantas outras criações.Pode-se dizer que a criatividade seja um atributo da condição humana, e que este potencial inventivo esteve desde sempre direcionado para desenvolver e 
          descobrir novos significados e possibilidades de existência, estabelecendo assim as bases para a transformação da humanidade"
        />
        <CardSkills
          icone={<TiGroup size={45} color={"007ced"} />}
          title="Liderança"
          content="O conceito de liderança mudou muito nas últimas décadas. Se antes a palavra parecia designar alguém com superpoderes, que detinha todas as respostas, carisma e solucionava qualquer problema, 
          hoje o termo encontra-se prioritariamente conectado a habilidades como “inspirar outras pessoas”, “se doar às outras pessoas” ou ainda “ter generosidade na delegação de autonomia” ¹. Atualmente, não 
          faz mais sentido concebermos a liderança como um tipo de influência unidirecional, isto é, organizada de cima para baixo. A sociedade se transformou, as organizações se modificaram e as pessoas também."
        />
      </div>
      <div></div>
    </Container>
  );
};

export default SoftSkills;
