import CardSkills from "../CardHardSkillsAndSoftSkills";
import { Container } from "./styled";

import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { SiStyledcomponents } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaNode } from "react-icons/fa";

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
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             Pellentesque euismod, nisi eu aliquam consectetur, 
                             nisl nunc consequat nisi, euismod aliquam nisl nunc vitae nisl. 
                             Lorem ipsum dolor sit amet"
                />
                <CardSkills
                    icone={<SiStyledcomponents size={45} color={'007ced'}/>}
                    title="Styled-Components"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             Pellentesque euismod, nisi eu aliquam consectetur, 
                             nisl nunc consequat nisi, euismod aliquam nisl nunc vitae nisl. 
                             Lorem ipsum dolor sit amet"
                />
                <CardSkills
                    icone={<IoLogoJavascript size={45} color={'007ced'}/>}
                    title="Javascript"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             Pellentesque euismod, nisi eu aliquam consectetur, 
                             nisl nunc consequat nisi, euismod aliquam nisl nunc vitae nisl. 
                             Lorem ipsum dolor sit amet"
                />
                <CardSkills
                    icone={<FaNode size={45} color={'007ced'}/>}
                    title="Node"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             Pellentesque euismod, nisi eu aliquam consectetur, 
                             nisl nunc consequat nisi, euismod aliquam nisl nunc vitae nisl. 
                             Lorem ipsum dolor sit amet"
                />
                <CardSkills
                    icone={<FaReact size={45} color={'007ced'}/>}
                    title="React"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             Pellentesque euismod, nisi eu aliquam consectetur, 
                             nisl nunc consequat nisi, euismod aliquam nisl nunc vitae nisl. 
                             Lorem ipsum dolor sit amet"
                />
                 <CardSkills
                    icone={<GrDocker size={45} color={'007ced'}/>}
                    title="Docker"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             Pellentesque euismod, nisi eu aliquam consectetur, 
                             nisl nunc consequat nisi, euismod aliquam nisl nunc vitae nisl. 
                             Lorem ipsum dolor sit amet"
                />
                 <CardSkills
                    icone={<AiOutlineConsoleSql size={45} color={'007ced'}/>}
                    title="SQL"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             Pellentesque euismod, nisi eu aliquam consectetur, 
                             nisl nunc consequat nisi, euismod aliquam nisl nunc vitae nisl. 
                             Lorem ipsum dolor sit amet"
                />
            </div>
            <div>

            </div>
        </Container>
    )
}

export default HardSkills;
