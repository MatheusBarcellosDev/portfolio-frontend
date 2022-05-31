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
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque euismod, nisi eu aliquam consectetur, 
                    nisl nunc consequat nisi, euismod aliquam nisl nunc vitae nisl. 
                    Lorem ipsum dolor sit amet"
        />
        <CardSkills
          icone={<AiFillWechat size={45} color={"007ced"} />}
          title="Comunicação"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque euismod, nisi eu aliquam consectetur, 
                    nisl nunc consequat nisi, euismod aliquam nisl nunc vitae nisl. 
                    Lorem ipsum dolor sit amet"
        />
        <CardSkills
          icone={<FaHandsHelping size={45} color={"007ced"} />}
          title="Colaboração"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque euismod, nisi eu aliquam consectetur, 
                    nisl nunc consequat nisi, euismod aliquam nisl nunc vitae nisl. 
                    Lorem ipsum dolor sit amet"
        />
        <CardSkills
          icone={<MdPsychology size={45} color={"007ced"} />}
          title="Pensamento Crítico"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque euismod, nisi eu aliquam consectetur, 
                    nisl nunc consequat nisi, euismod aliquam nisl nunc vitae nisl. 
                    Lorem ipsum dolor sit amet"
        />
        <CardSkills
          icone={<BsFillLightbulbFill size={45} color={"007ced"} />}
          title="Criatividade"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque euismod, nisi eu aliquam consectetur, 
                    nisl nunc consequat nisi, euismod aliquam nisl nunc vitae nisl. 
                    Lorem ipsum dolor sit amet"
        />
        <CardSkills
          icone={<TiGroup size={45} color={"007ced"} />}
          title="Liderança"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque euismod, nisi eu aliquam consectetur, 
                    nisl nunc consequat nisi, euismod aliquam nisl nunc vitae nisl. 
                    Lorem ipsum dolor sit amet"
        />
      </div>
      <div></div>
    </Container>
  );
};

export default SoftSkills;
