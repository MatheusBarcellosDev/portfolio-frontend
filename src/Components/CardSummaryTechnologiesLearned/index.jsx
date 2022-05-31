import { ContainerContent, ContainerDate } from "./styled";

const TechnologiesLearned = ({ date, school, technology, resume }) => {
  return (
    <div style={{position: 'relative'}}>
      <ContainerDate>
        <div className="date">
          <span>{date}</span>
        </div>
        <div className="school">
          <span>{school}</span>
        </div>
      </ContainerDate>
      <ContainerContent>
        <div className="container-content">
          <div className="container-technology">
            <div className="technology">
              <span>{technology}</span>
            </div>
            <div className="resume">
              <p>{resume}</p>
            </div>
          </div>
        </div>
      </ContainerContent>
    </div>
  );
};

export default TechnologiesLearned;
