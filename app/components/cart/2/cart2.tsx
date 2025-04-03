import "./cart2.css"
import type {ReactNode} from "react";

export default function Cart2({children, heading}: { children: ReactNode, heading: string }) {
    return <div className="cart2">
        <p className='fs5 mfs4 i-m'>{heading}</p>
        <div className="cart2-children">
            {children}
        </div>
    </div>
}