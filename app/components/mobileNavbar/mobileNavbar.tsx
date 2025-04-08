import "./mobileNavbar.css"
import {Link, NavLink} from "react-router";
import {useAppContext} from "~/context/context";
import useVisibleHook from "~/components/header/scroll";
import {useEffect} from "react";

interface Props {
    setVisible: (a: boolean) => void;
}

export default function MobileNavbar({setVisible}: Props) {
    const {isOpen, setIsOpen} = useAppContext();

    const hmm = useVisibleHook()

    useEffect(() => {
        () => {
            setVisible(hmm)
        }
    }, [hmm])

    return <>
        <div id='header-back-layer' style={isOpen ? {opacity: '1'} : {opacity: '0'}}/>

        <div className="menu-container">
            <input type="checkbox" id="menu-toggle" className="menu-toggle" checked={isOpen}
                   onChange={() => {
                       setIsOpen(!isOpen);
                       // const block = document.getElementById('mainp-sec1-btn');
                       // if (block) {
                       //     console.log("блок есть");
                       //     // if (!open) {
                       //     //     block.classList.add('disnone');
                       //     //     block.style
                       //     // } else {
                       //     //     block.classList.remove('disnone');
                       //     // }
                       // } else {
                       //     console.log("блока нет");
                       // }
                   }}
            />
            <label htmlFor="menu-toggle" className="menu-button">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </label>
        </div>
        <nav id='mobile-nav' className={`${isOpen ? 'mobile-nav-open' : 'mobile-nav-close'}`}>
            <div id='navbar-block'>
                <NavLink to={"/about"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}
                         style={{whiteSpace: "nowrap"}}>
                    о компании
                </NavLink>
                <NavLink to={"/services"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}>
                    услуги
                </NavLink>
                <NavLink to={"/cases"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}>
                    проекты
                </NavLink>
                <NavLink to={"/licenses"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}>
                    лицензии
                </NavLink>
                <NavLink to={"/reviews"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}>
                    отзывы
                </NavLink>
                <NavLink to={"/contacts"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}>
                    контакты
                </NavLink>
            </div>
            <Link to={"/contactus"} className="fs8 mfs4 i-b"
                  onClick={() => setIsOpen(false)}>
                связаться
            </Link>
        </nav>
    </>
}