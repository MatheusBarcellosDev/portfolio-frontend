import { Nav } from './styled'
import { Link } from 'react-router-dom'
import { DiReact } from 'react-icons/di'

const NavBar = ({show}) => {
    return (
        <Nav className={show ? 'open' : ''}>
            <ul>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/formation">Formation</Link></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="iconReact">
                <DiReact/>
            </div>

        </Nav>
    )
}

export default NavBar;