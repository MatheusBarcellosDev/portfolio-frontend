import { Nav } from './styled'
import { Link } from 'react-router-dom'
import { DiReact } from 'react-icons/di'

const NavBar = ({show}) => {
    return (
        <Nav className={show ? 'open' : ''}>
            <ul>
                <li><Link to="/">Sobre</Link></li>
                <li><Link to="/formation">Formações</Link></li>
                <li><Link to="/projects">Projetos</Link></li>
                <li><Link to="/contact">Contato</Link></li>
            </ul>
            <div className="iconReact">
                <DiReact/>
            </div>

        </Nav>
    )
}

export default NavBar;