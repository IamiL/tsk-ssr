import "./cases.css"
import Cart6 from "./../../components/cart/6/cart6";

export default function CasesPage() {
    return (
        <section id='casesp-sec'>
            <h1 className='fs3 mfs3 m-b' id='casesp-sec-heading'>Проекты</h1>
            <div id='casesp-container1'>
                <div className='divid' id='divid4'/>
                <p id='casesp-container1-text'
                   className='fs5 mfs6 i-r'>{`Мы предоставляем комплексные решения по проектированию, монтажу и обслуживанию систем безопасности для ведущих предприятий и организаций. Наша команда обеспечивает надежную защиту объектов различных отраслей — от энергетики и промышленности до банков и торгово-развлекательных комплексов.`}</p>
            </div>
            <button className='btn fs5 mfs6 i-m up' id='casesp-btn'>↓ скачать портфолио</button>
            <div id='casesp-container2'>
                <Cart6 heading={'Энергосистема «Урал» ОАО «Фортум»'}
                       value={'Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного...'}
                       link={'/ural'}>
                    <img src={'CaseUral.webp'} alt={'project-ural'}/>
                </Cart6>
                <Cart6 heading={'Энергосистема «Урал» ОАО «Фортум»'}
                       value={'Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного...'}
                       link={'/ural'}>
                    <img src={'CaseUral.webp'} alt={'project-ural'}/>
                </Cart6>
                <Cart6 heading={'Энергосистема «Урал» ОАО «Фортум»'}
                       value={'Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного...'}
                       link={'/ural'}>
                    <img src={'CaseUral.webp'} alt={'project-ural'}/>
                </Cart6>
                <Cart6 heading={'Энергосистема «Урал» ОАО «Фортум»'}
                       value={'Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного...'}
                       link={'/ural'}>
                    <img src={'CaseUral.webp'} alt={'project-ural'}/>
                </Cart6>

            </div>
        </section>
    );
}
