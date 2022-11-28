import { Link } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h1>Our hard working employees</h1>
            <ul>
                <li>
                    <Link to='/blog/experience-the-effects-of-miraculous-stones'>Feras</Link>
                </li>
                <li>
                    <Link to='/blog/2020-trends-in-health-tourism'>Hassan</Link>
                </li>
                <li>
                    <Link to='/blog/opened-the-doors-of-the-damascus-spa-center'>Ayham</Link>
                </li>
                <li>
                    <Link to='/blog/how-to-become-a-good-vlogger'>Mais</Link>
                </li>
            </ul>
        </div>
    )
}

export default About