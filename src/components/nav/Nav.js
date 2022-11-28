import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to="/" className='test'>Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default Nav