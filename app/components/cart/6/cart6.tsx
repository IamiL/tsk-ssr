import './cart6.css'
import type {ReactNode} from "react";
import {Link} from "react-router";

export default function Cart6({children, heading, value, link}: {
    children: ReactNode,
    heading: string,
    value: string,
    link: string
}) {
    return <div className='cart6 main-grid'>
        <h3 className='fs5 mfs4 i-m cart6-heading'>{heading}</h3>
        <div className='cart6-value'>
            <p className='fs8 mfs6 i-m'>{value}</p>
            <Link to={link} className='fs8 mfs6 i-b cart6-value-link'>→Подробнее</Link>
        </div>
        <div className='cart6-img'>
            {children}
        </div>
    </div>
}