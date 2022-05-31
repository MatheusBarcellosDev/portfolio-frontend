import photo from '../../assets/images/eu.jpeg';
import { ContainerPhoto } from './styled';

const MainPhoto = () => {
    return (
       <ContainerPhoto>
            <div className="main-photo">
                <img src={ photo } className="img-fluid" alt="" />
            </div>
        </ContainerPhoto> 
    )
}

export default MainPhoto;