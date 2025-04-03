import map from "./map.png";
import "./page.css"

export default function ContactsPage() {
    return (
        <>
            <section id='contactsp-sec1'>
                <h1 className='fs3 m-b'>Контакты</h1>
                <div className='main-grid' id='contactsp-sec1-container'>
                    <h2 className='fs5 i-m' id='contactsp-sec1-container-heading'>Расположение</h2>
                    <div id='contactsp-map'><img src={map} alt={'Map'} id='contactsp-map-img'/></div>
                </div>
            </section>
            <section className='main-grid' id='contactsp-sec2'>
                <h2 className='fs5 i-m organization-map-heading'>Карта предприятия</h2>
                <ul className='fs8 i-m contactsp-specs'>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Полное наименование организации
                        </p>
                        <p>
                            Общество с ограниченной<br/> ответственностью «тСк»
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Краткое наименование организации
                        </p>
                        <p>
                            ООО «тСк»
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Место нахождения
                        </p>
                        <p>
                            г.Челябинск
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Юридический адрес
                        </p>
                        <p>
                            454008, г. Челябинск, ул. Кыштымская, 3-44
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Почтовый адрес
                        </p>
                        <p>
                            454008, г. Челябинск, ул. Кыштымская, 3-44
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Фактический адрес
                        </p>
                        <p>
                            454048, г. Челябинск, ул. Доватора, 32 В-6
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Телефон
                        </p>
                        <p>
                            (351) 261-55-53, 261-59-79
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Е-mail
                        </p>
                        <p>
                            info@tsk74.ru
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Генеральный директор
                        </p>
                        <p>
                            Солопов Дмитрий Викторович
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Главный бухгалтер
                        </p>
                        <p>
                            Берсенева Наталья Владимировна
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            ОГРН
                        </p>
                        <p>
                            1087451013517
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            ИНН
                        </p>
                        <p>
                            7451273733
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            КПП
                        </p>
                        <p>
                            744801001
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            ОКВЭД (ОКОНХ)
                        </p>
                        <p>
                            32.30.9
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            ОКПО
                        </p>
                        <p>
                            86964836
                        </p>
                    </li>
                    <li className='contactsp-spec'>
                        <p>
                            ОКАТО
                        </p>
                        <p>
                            75401366000
                        </p>
                    </li>
                </ul>
            </section>
            <section className='main-grid' id='contactsp-sec3'>
                <h2 className='fs5 i-m organization-map-heading'>Платежные реквизиты</h2>
                <ul className='fs8 i-m contactsp-specs'>
                    <li className='contactsp-spec border-bottom'>
                        <p>Полное наименование банка</p>
                        <p>ПАО «Челябинвестбанк»</p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>Город банка</p>
                        <p>г.Челябинск</p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>Расчетный счет организации</p>
                        <p>40702810590000010233</p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>Корреспондентский счет</p>
                        <p>30101810400000000779</p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>БИК банка</p>
                        <p>047501779</p>
                    </li>
                    <li className='contactsp-spec'>
                        <p>Контактный телефон</p>
                        <p>(351) 261-55-53, 261-59-79</p>
                    </li>
                </ul>
            </section>
        </>
    );
}
