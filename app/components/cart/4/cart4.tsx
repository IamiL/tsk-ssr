import {Link} from "react-router";
import "./cart4.css"

export default function Cart4({heading, value, link, mainClassName}: {
    heading: string,
    value: string,
    link: string,
    mainClassName: string
}) {
    return <div className={mainClassName}>
        <h2 className='fs5 i-m'>{heading}</h2>
        <p className='fs8 i-m'>{value}</p>
        <Link to={link} className='fs8 i-b cart4-link'>→Подробнее</Link>
    </div>
}