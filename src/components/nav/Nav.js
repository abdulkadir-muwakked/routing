import './Nav.css'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    const links = [
        {
            target: '/',
            text: 'Home'
        },
        {
            target: '/contact',
            text: 'Contact'
        },
        {
            target: '/about',
            text: 'About'
        },
        {
            target: '/blog',
            text: 'Blog'
        },
        {
            target: '/signup',
            text: 'Sign Up'
        }
    ]
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Routing App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    {links.map((link, i) => {
                        return (
                            <li className="nav-item" key={i}>
                                <NavLink to={link.target} className='nav-link'>{link.text}</NavLink>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav