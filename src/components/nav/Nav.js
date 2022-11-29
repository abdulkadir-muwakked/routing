import './Nav.css'
import { NavLink } from 'react-router-dom'

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
        }
    ]
    return (
        <menu>
            {links.map((link, i) => {
                return (
                    <NavLink key={i} to={link.target} className={({isActive}) => {
                        return isActive ? 'current' : ''
                    }}>{link.text}</NavLink>
                )
            })}
        </menu>
    )
}

export default Nav