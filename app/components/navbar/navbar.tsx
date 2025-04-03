import "./navbar.css"
import {Link, NavLink} from "react-router";

export default function Navbar({location}: { location: string }) {
    return <nav id='desktop-nav'>
        <div id='navbar-block'>
            <NavLink to={"/about"} className={({isActive}) => (`fs8 i-b ${isActive ? 'navbar-active-link' : ''}`)}
                     style={{whiteSpace: "nowrap"}}>
                о компании
            </NavLink>
            <NavLink to={"/services"} className={({isActive}) => (`fs8 i-b ${isActive ? 'navbar-active-link' : ''}`)}>
                услуги
            </NavLink>
            <NavLink to={"/cases"} className={({isActive}) => (`fs8 i-b ${isActive ? 'navbar-active-link' : ''}`)}>
                проекты
            </NavLink>
            <NavLink to={"/licenses"} className={({isActive}) => (`fs8 i-b ${isActive ? 'navbar-active-link' : ''}`)}>
                лицензии
            </NavLink>
            <NavLink to={"/reviews"} className={({isActive}) => (`fs8 i-b ${isActive ? 'navbar-active-link' : ''}`)}>
                отзывы
            </NavLink>
            <NavLink to={"/contacts"} className={({isActive}) => (`fs8 i-b ${isActive ? 'navbar-active-link' : ''}`)}>
                контакты
            </NavLink>
        </div>
        <Link to={"/contactus"} className='fs8 i-b' id='navbar-contactus'>
            связаться
        </Link>
    </nav>
}