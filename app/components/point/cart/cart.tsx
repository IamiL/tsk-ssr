'use client';
import Point from "./../point";
import "./cart.css"
import React from "react"
import {Link} from "react-router";

export default function PointCart({id}: { id: string }) {
    const [onDisplay, setOnDisplay] = React.useState(false);

    return <div className='point' id={id}>
        <Point className={'point-icon'} onClick={() => setOnDisplay(!onDisplay)}/>
        {onDisplay && <div className='point-info'>
            <div className='point-info-top'>
                <h3 className='point-info-heading fs9 i-m'>КИТСОЗ</h3>
                <div className='point-info-close fs10 i-m'>крест</div>
            </div>
            <div className='point-info-img-container'>
                <img src={'CaseUral.png'} alt={'caseUral'} className='point-info-img'/>
            </div>
            <div className='point-info-info fs10 i-r'>
                Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для
                объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного...
            </div>
            <div className='point-info-link fs10 i-b'>
                <Link to={'/'}>→Подробнее</Link>
            </div>
        </div>}
    </div>
}