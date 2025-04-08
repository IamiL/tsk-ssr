import {Link} from "react-router";
import "./cart4.css"

export default function Cart4({heading, value, link, mainClassName}: {
    heading: string,
    value: string,
    link: string,
    mainClassName: string
}) {
    return <div className={mainClassName}>
        <h2 className='fs5 mfs4 i-m'>{heading}</h2>
        <p className='fs8 mfs6 i-m' id='cart4-value'>{value}</p>
        <div className='cart4-link'>
            <Link to={link} className='fs8 mfs6 i-b'>→Подробнее</Link>
        </div>
    </div>
}