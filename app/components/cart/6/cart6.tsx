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
            <Link to={link} className='fs8 mfs6 i-b cart6-value-link'>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.96165 13.7159L5.47869 12.2457L9.37145 8.35298H0.25V6.19247H9.37145L5.47869 2.30611L6.96165 0.829545L13.4048 7.27273L6.96165 13.7159Z"
                        fill="white"/>
                </svg>
                <p>
                    Подробнее
                </p>
            </Link>
        </div>
        <div className='cart6-img'>
            {children}
        </div>
    </div>
}